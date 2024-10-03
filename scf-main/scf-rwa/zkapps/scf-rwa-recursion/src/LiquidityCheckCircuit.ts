import {Bool,UInt8, Field, SmartContract, state, State, method, Bytes, Struct, CircuitString } from 'o1js';

export class ACTUSData extends Struct({
	scenarioID: CircuitString,
	scenarioName: String,
	riskEvaluated: Field,
	//currentDate: Field,

	cashInflows  : [Number,Number,Number],    // Monthly cash inflows
	cashOutflows : [Number,Number,Number],     // Monthly cash outflows
	newInvoiceAmount : Number,                 // Amount of the new invoice
	newInvoiceEvaluationMonth : Number,		     // Include invoice in month 3
	liquidityThreshold : Number,               // Required liquidity ratio

  }) {
	// method for signature creation and verification
	// toFields(): Field[] {
	//   return [
	//     ...this.companyID.values.map((item) => item.toField()),
	//     ...this.companyName.values.map((item) => item.toField()),
	//     ...this.currCompanyComplianceStatusCode.values.map((item) => item.toField()),
	//     //this.currentDate,
	//   ];
   // }
  }

export class LiquidityCheckCircuit extends SmartContract {
	@state(Bool) accepted = State<Bool>();
  
	init() {
	  super.init();
	  this.accepted.set(Bool(false));
	}
  
	@method async verifyTrace(trace : ACTUSData) {

	  let out = verifyCashFlows(trace);
	  this.accepted.set(out);
	}
  }

export function verifyCashFlows(input: ACTUSData) {

const cashInflows = input.cashInflows;  // Monthly cash inflows
const cashOutflows = input.cashOutflows;   // Monthly cash outflows
const newInvoiceAmount = input.newInvoiceAmount;                // Amount of the new invoice
const newInvoiceEvaluationMonth = input.newInvoiceEvaluationMonth;  		  // Include invoice in month 3
const liquidityThreshold = input.liquidityThreshold;              // Required liquidity ratio

console.log('cash inflows', cashInflows);
console.log('cash outflows', cashOutflows);

// Cash flow projections
let cashFlowProjections = [];
let cumulativeCashFlow = 0;

let out = Bool(false);

// Simulate cash flows over 3 months
for (let month = 0; month < 3; month++) {
    let inflow = cashInflows[month];
    let outflow = cashOutflows[month] + (month === newInvoiceEvaluationMonth ? newInvoiceAmount : 0); // Include invoice in month 3
    let netCashFlow = inflow - outflow;
    cumulativeCashFlow += netCashFlow;

	let reducedVal = cashOutflows.reduce((acc,val) => acc + val,0);

	//console.log('red val ', reducedVal);
	//let liqRatio = cumulativeCashFlow / (cashOutflows.reduce((acc, val) => acc + val, 0) + newInvoiceAmount)
    
	let liqRatio = cumulativeCashFlow /( reducedVal + newInvoiceAmount);

    cashFlowProjections.push({
        month: month + 1,
        cashInflow: inflow,
        cashOutflow: outflow,
        netCashFlow: netCashFlow,
        cumulativeCashFlow: cumulativeCashFlow,
        liquidityRatio: cumulativeCashFlow / (cashOutflows.reduce((acc, val) => acc + val, 0) + newInvoiceAmount)
    });

	if ( liqRatio >= liquidityThreshold) {
		out = Bool(true)		
	} else {		
		out = Bool(false)
	}
		
	console.log(' inner   month ' , month ,'reduced Val', reducedVal,'net cash flow ', netCashFlow,   'cumulative cash flow ', cumulativeCashFlow,' liq ratio', liqRatio );
}	

//console.log('cumulative cash flow ', cumulativeCashFlow, ' out ',out.toJSON() );

return out;

}
