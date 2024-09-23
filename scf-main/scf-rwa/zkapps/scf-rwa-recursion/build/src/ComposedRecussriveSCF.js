import { Field, Signature, PublicKey, Struct, ZkProgram, CircuitString } from 'o1js';
/*
import {
  CorporateRegistrationData,
  evalCorporateCompliance,
} from './ProofOfCompanyRegistration.utils.js';

import {
  InternationalTradeComplianceData,
  evalInternationalTradeCompliance,
} from './ProofOfInternationalTradeCompliance.utils.js';

*/
// Define the Public Output Structure
export class CorporateRegistrationPublicOutput extends Struct({
    corporateComplianceToProve: Field,
    currCorporateComplianceStatusCode: Field,
    //internationalTradeComplianceToProve: Field,
    //companyComplianceStatusCode: Field,
    creatorPublicKey: PublicKey,
}) {
}
export class InternationalTradeCompliancePublicOutput extends Struct({
    //corporateComplianceToProve: Field,
    //currCompanyComplianceStatusCode: Field,
    internationalTradeComplianceToProve: Field,
    currEXIMComplianceStatusCode: Field,
    creatorPublicKey: PublicKey,
}) {
}
class CorporateRegistrationData extends Struct({
    companyID: CircuitString,
    companyName: CircuitString,
    mcaID: CircuitString,
    businessPANID: CircuitString,
    currCompanyComplianceStatusCode: Field,
    //currentDate: Field,
}) {
}
class InternationalTradeComplianceData extends Struct({
    companyID: CircuitString,
    companyName: CircuitString,
    dgftID: CircuitString,
    businessPANID: CircuitString,
    currEXIMComplianceStatusCode: Field,
    //currentDate: Field,
}) {
}
// zk-SNARK Program for Compliance.. which verifies corporate registration and international trade compliance.
export const proofOfCorporateRegistrationCompliance = ZkProgram({
    name: 'ZkProofOfCorporateRegistrationCompliance',
    publicInput: Field,
    publicOutput: CorporateRegistrationPublicOutput,
    methods: {
        proveCompliance: {
            privateInputs: [
                CorporateRegistrationData,
                Signature,
                Signature,
                PublicKey,
            ],
            async method(corporateComplianceToProve, corporateRegistrationData, oracleSignature, creatorSignature, creatorPublicKey) {
                const validSignature = oracleSignature.verify(PublicKey.fromBase58('B62qmXFNvz2sfYZDuHaY5htPGkx1u2E2Hn3rWuDWkE11mxRmpijYzWN'), CorporateRegistrationData.toFields(corporateRegistrationData));
                validSignature.assertTrue();
                const validSignature_ = creatorSignature.verify(creatorPublicKey, CorporateRegistrationData.toFields(corporateRegistrationData));
                validSignature_.assertTrue();
                /*
                const companyRegistration = evalCorporateCompliance(corporateRegistrationData.currCompanyComplianceStatusCode);
                corporateRegistrationData.currCompanyComplianceStatusCode.greaterThan(Field(0)).assertTrue();
                */
                corporateRegistrationData.currCompanyComplianceStatusCode.assertEquals(Field(1));
                /*
                return new CompanyRegistrationPublicOutput({
                  corporateComplianceToProve: corporateComplianceToProve,
                  currCompanyComplianceStatusCode: corporateRegistrationData.currCompanyComplianceStatusCode,
                  corporateComplianceToProve: Field(1),
                  companyComplianceStatusCode: Field(1),
                  creatorPublicKey: creatorPublicKey,
                });
        
        
        // Define the Public Output Structure
        export class CorporateRegistrationPublicOutput extends Struct({
          corporateComplianceToProve: Field,
          currCorporateComplianceStatusCode: Field,
          //internationalTradeComplianceToProve: Field,
          //companyComplianceStatusCode: Field,
          creatorPublicKey: PublicKey,
        }) {}
                */
                return new CorporateRegistrationPublicOutput({
                    corporateComplianceToProve: Field(1),
                    currCorporateComplianceStatusCode: Field(1),
                    creatorPublicKey: creatorPublicKey,
                });
            },
        },
    },
});
// zk-SNARK Program for Compliance.. which verifies corporate registration and international trade compliance.
export const proofOfInternationalTradeCompliance = ZkProgram({
    name: 'ZkProofOfInternationalTradeCompliance',
    publicInput: Field,
    publicOutput: InternationalTradeCompliancePublicOutput,
    methods: {
        proveCompliance: {
            privateInputs: [
                InternationalTradeComplianceData,
                Signature,
                Signature,
                PublicKey,
            ],
            async method(tradeComplianceToProve, tradeComplianceData, oracleSignature, creatorSignature, creatorPublicKey) {
                const validSignature = oracleSignature.verify(PublicKey.fromBase58('B62qmXFNvz2sfYZDuHaY5htPGkx1u2E2Hn3rWuDWkE11mxRmpijYzWN'), InternationalTradeComplianceData.toFields(tradeComplianceData));
                validSignature.assertTrue();
                const validSignature_ = creatorSignature.verify(creatorPublicKey, InternationalTradeComplianceData.toFields(tradeComplianceData));
                validSignature_.assertTrue();
                /*
                const companyRegistration = evalCorporateCompliance(corporateRegistrationData.currCompanyComplianceStatusCode);
                corporateRegistrationData.currCompanyComplianceStatusCode.greaterThan(Field(0)).assertTrue();
                */
                tradeComplianceData.currEXIMComplianceStatusCode.assertEquals(Field(1));
                return new InternationalTradeCompliancePublicOutput({
                    //corporateComplianceToProve: corporateComplianceToProve,
                    //currCompanyComplianceStatusCode: corporateRegistrationData.currCompanyComplianceStatusCode,
                    internationalTradeComplianceToProve: Field(1),
                    currEXIMComplianceStatusCode: Field(1),
                    creatorPublicKey: creatorPublicKey,
                });
            },
        },
    },
});
/*
export const ProofOfCompliance_ = ZkProgram.Proof(proofOfCompliance);
export class ProofOfCompliance extends ProofOfCompliance_ {}
export class ProofOfCompanyRegistrationProof extends ZkProgram.Proof(proofOfCompliance) {}

// Define the ProofOfCompanyRegistration Smart Contract
export class ProofOfCompanyRegistration extends SmartContract {
  events = {
    'provided-valid-proof': PublicOutput,
  };

  init() {
    super.init();
    this.account.permissions.set({
      ...Permissions.default(),
    });
  }

  @method async verifyProof(proof: ProofOfCompliance) {
    proof.verify();
    this.emitEvent('provided-valid-proof', proof.publicOutput);
  }
}
*/
// Main function to check proofs, perform multiplication, and generate new proof
const main = async () => {
    console.log('Compiling proofs...');
    /*
    
      // Compile ProofOfCompliance first
      let proofOfComplianceCompiled;
      try {
        proofOfComplianceCompiled = await proofOfCompliance.compile();
        console.log('Compiled ProofOfCompliance:', proofOfComplianceCompiled);
      } catch (error) {
        console.error('Error compiling ProofOfCompliance:', error);
        return;
      }
    
      // Now compile ProofOfCompanyRegistration
      let proofOfCompanyRegistrationCompiled;
      try {
        proofOfCompanyRegistrationCompiled = await ProofOfCompanyRegistration.compile();
        console.log('Compiled ProofOfCompanyRegistration:', proofOfCompanyRegistrationCompiled);
      } catch (error) {
        console.error('Error compiling ProofOfCompanyRegistration:', error);
        return;
      }
    
      // Check if proofs are generated
      const isCompanyRegistrationGenerated = !!proofOfCompanyRegistrationCompiled;
      const isInternationalTradeComplianceGenerated = !!proofOfComplianceCompiled;
    
      console.log('ProofOfCompanyRegistration:', isCompanyRegistrationGenerated ? 'Generated' : 'Not Generated');
      console.log('ProofOfInternationalTradeCompliance:', isInternationalTradeComplianceGenerated ? 'Generated' : 'Not Generated');
    
      // Perform multiplication of currEXIMComplianceStatusCode from both proofs
      if (isCompanyRegistrationGenerated && isInternationalTradeComplianceGenerated) {
        try {
          // Create proof instances with required arguments
          const proofOfComplianceInstance = new ProofOfCompliance({
            proof: proofOfComplianceCompiled,
            publicInput: Field(0),  // Example value for publicInput, replace as needed
            publicOutput: new PublicOutput({
              corporateComplianceToProve: Field(0),
              currCompanyComplianceStatusCode: Field(0),
              internationalTradeComplianceToProve: Field(0),
              currEXIMComplianceStatusCode: Field(1),
              creatorPublicKey: PublicKey.fromBase58('B62qmXFNvz2sfYZDuHaY5htPGkx1u2E2Hn3rWuDWkE11mxRmpijYzWN')
            }),
            maxProofsVerified: 0
          });
    
          const proofOfCompanyRegistrationInstance = new ProofOfCompanyRegistrationProof({
            proof: proofOfCompanyRegistrationCompiled,
            publicInput: Field(0),  // Example value for publicInput, replace as needed
            publicOutput: new PublicOutput({
              corporateComplianceToProve: Field(0),
              currCompanyComplianceStatusCode: Field(0),
              internationalTradeComplianceToProve: Field(0),
              currEXIMComplianceStatusCode: Field(1),
              creatorPublicKey: PublicKey.fromBase58('B62qmXFNvz2sfYZDuHaY5htPGkx1u2E2Hn3rWuDWkE11mxRmpijYzWN')
            }),
            maxProofsVerified: 0
          });
    
          let eximComplianceFromProofOfCompliance = proofOfComplianceInstance.publicOutput.currEXIMComplianceStatusCode;
          let eximComplianceFromProofOfCompanyRegistration = proofOfCompanyRegistrationInstance.publicOutput.currEXIMComplianceStatusCode;
    
    
    
         console.log('eximComplianceFromProofOfCompliance', eximComplianceFromProofOfCompliance.value[0]  );
         console.log('eximComplianceFromProofOfCompanyRegistration ', eximComplianceFromProofOfCompanyRegistration.value[0] );
    
    
          const multipliedEXIMCompliance = eximComplianceFromProofOfCompliance.mul(eximComplianceFromProofOfCompanyRegistration);
    
          // Print the result as the third proof
          console.log('Multiplied EXIM Compliance Status Code:', multipliedEXIMCompliance.toString());
    
          //const newProof = await generateNewProof();
          //console.log('New Proof:', newProof);
        } catch (error) {
          console.error('Error during multiplication or new proof generation:', error);
        }
      } else {
        console.log('One or both proofs not generated, status: Inactive');
      }
    
    */
};
// Define a function to generate a new proof (customize as needed)
//const generateNewProof = async () => {
// Implement the logic to generate a new proof
// This is a placeholder implementation
//  return '';
//};
main();
//# sourceMappingURL=ComposedRecussriveSCF.js.map