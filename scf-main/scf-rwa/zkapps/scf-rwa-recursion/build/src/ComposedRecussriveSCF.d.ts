import { Signature, PublicKey, Proof, CircuitString } from 'o1js';
declare const CorporateRegistrationPublicOutput_base: (new (value: {
    corporateComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
    currCorporateComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    creatorPublicKey: PublicKey;
}) => {
    corporateComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
    currCorporateComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    creatorPublicKey: PublicKey;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf").Provable<{
    corporateComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
    currCorporateComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    creatorPublicKey: PublicKey;
}, {
    corporateComplianceToProve: bigint;
    currCorporateComplianceStatusCode: bigint;
    creatorPublicKey: {
        x: bigint;
        isOdd: boolean;
    };
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field").Field[]) => {
        corporateComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        currCorporateComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
        creatorPublicKey: PublicKey;
    };
} & {
    fromValue: (value: {
        corporateComplianceToProve: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
        currCorporateComplianceStatusCode: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
        creatorPublicKey: PublicKey | {
            x: bigint | import("o1js/dist/node/lib/provable/field").Field;
            isOdd: boolean | import("o1js/dist/node/lib/provable/bool").Bool;
        };
    }) => {
        corporateComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        currCorporateComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
        creatorPublicKey: PublicKey;
    };
    toInput: (x: {
        corporateComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        currCorporateComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
        creatorPublicKey: PublicKey;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        corporateComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        currCorporateComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
        creatorPublicKey: PublicKey;
    }) => {
        corporateComplianceToProve: string;
        currCorporateComplianceStatusCode: string;
        creatorPublicKey: string;
    };
    fromJSON: (x: {
        corporateComplianceToProve: string;
        currCorporateComplianceStatusCode: string;
        creatorPublicKey: string;
    }) => {
        corporateComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        currCorporateComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
        creatorPublicKey: PublicKey;
    };
    empty: () => {
        corporateComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        currCorporateComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
        creatorPublicKey: PublicKey;
    };
};
export declare class CorporateRegistrationPublicOutput extends CorporateRegistrationPublicOutput_base {
}
declare const InternationalTradeCompliancePublicOutput_base: (new (value: {
    internationalTradeComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
    currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    creatorPublicKey: PublicKey;
}) => {
    internationalTradeComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
    currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    creatorPublicKey: PublicKey;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf").Provable<{
    internationalTradeComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
    currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    creatorPublicKey: PublicKey;
}, {
    internationalTradeComplianceToProve: bigint;
    currEXIMComplianceStatusCode: bigint;
    creatorPublicKey: {
        x: bigint;
        isOdd: boolean;
    };
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field").Field[]) => {
        internationalTradeComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
        creatorPublicKey: PublicKey;
    };
} & {
    fromValue: (value: {
        internationalTradeComplianceToProve: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
        currEXIMComplianceStatusCode: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
        creatorPublicKey: PublicKey | {
            x: bigint | import("o1js/dist/node/lib/provable/field").Field;
            isOdd: boolean | import("o1js/dist/node/lib/provable/bool").Bool;
        };
    }) => {
        internationalTradeComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
        creatorPublicKey: PublicKey;
    };
    toInput: (x: {
        internationalTradeComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
        creatorPublicKey: PublicKey;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        internationalTradeComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
        creatorPublicKey: PublicKey;
    }) => {
        internationalTradeComplianceToProve: string;
        currEXIMComplianceStatusCode: string;
        creatorPublicKey: string;
    };
    fromJSON: (x: {
        internationalTradeComplianceToProve: string;
        currEXIMComplianceStatusCode: string;
        creatorPublicKey: string;
    }) => {
        internationalTradeComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
        creatorPublicKey: PublicKey;
    };
    empty: () => {
        internationalTradeComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
        creatorPublicKey: PublicKey;
    };
};
export declare class InternationalTradeCompliancePublicOutput extends InternationalTradeCompliancePublicOutput_base {
}
declare const CorporateRegistrationData_base: (new (value: {
    companyID: CircuitString;
    companyName: CircuitString;
    mcaID: CircuitString;
    businessPANID: CircuitString;
    currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
}) => {
    companyID: CircuitString;
    companyName: CircuitString;
    mcaID: CircuitString;
    businessPANID: CircuitString;
    currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf").Provable<{
    companyID: CircuitString;
    companyName: CircuitString;
    mcaID: CircuitString;
    businessPANID: CircuitString;
    currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
}, {
    companyID: string;
    companyName: string;
    mcaID: string;
    businessPANID: string;
    currCompanyComplianceStatusCode: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field").Field[]) => {
        companyID: CircuitString;
        companyName: CircuitString;
        mcaID: CircuitString;
        businessPANID: CircuitString;
        currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
} & {
    fromValue: (value: {
        companyID: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        companyName: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        mcaID: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        businessPANID: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        currCompanyComplianceStatusCode: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        companyID: CircuitString;
        companyName: CircuitString;
        mcaID: CircuitString;
        businessPANID: CircuitString;
        currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
    toInput: (x: {
        companyID: CircuitString;
        companyName: CircuitString;
        mcaID: CircuitString;
        businessPANID: CircuitString;
        currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        companyID: CircuitString;
        companyName: CircuitString;
        mcaID: CircuitString;
        businessPANID: CircuitString;
        currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        companyID: {
            values: {
                value: string;
            }[];
        };
        companyName: {
            values: {
                value: string;
            }[];
        };
        mcaID: {
            values: {
                value: string;
            }[];
        };
        businessPANID: {
            values: {
                value: string;
            }[];
        };
        currCompanyComplianceStatusCode: string;
    };
    fromJSON: (x: {
        companyID: {
            values: {
                value: string;
            }[];
        };
        companyName: {
            values: {
                value: string;
            }[];
        };
        mcaID: {
            values: {
                value: string;
            }[];
        };
        businessPANID: {
            values: {
                value: string;
            }[];
        };
        currCompanyComplianceStatusCode: string;
    }) => {
        companyID: CircuitString;
        companyName: CircuitString;
        mcaID: CircuitString;
        businessPANID: CircuitString;
        currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
    empty: () => {
        companyID: CircuitString;
        companyName: CircuitString;
        mcaID: CircuitString;
        businessPANID: CircuitString;
        currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
};
declare class CorporateRegistrationData extends CorporateRegistrationData_base {
}
declare const InternationalTradeComplianceData_base: (new (value: {
    companyID: CircuitString;
    companyName: CircuitString;
    dgftID: CircuitString;
    businessPANID: CircuitString;
    currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
}) => {
    companyID: CircuitString;
    companyName: CircuitString;
    dgftID: CircuitString;
    businessPANID: CircuitString;
    currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf").Provable<{
    companyID: CircuitString;
    companyName: CircuitString;
    dgftID: CircuitString;
    businessPANID: CircuitString;
    currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
}, {
    companyID: string;
    companyName: string;
    dgftID: string;
    businessPANID: string;
    currEXIMComplianceStatusCode: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field").Field[]) => {
        companyID: CircuitString;
        companyName: CircuitString;
        dgftID: CircuitString;
        businessPANID: CircuitString;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
} & {
    fromValue: (value: {
        companyID: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        companyName: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        dgftID: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        businessPANID: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        currEXIMComplianceStatusCode: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        companyID: CircuitString;
        companyName: CircuitString;
        dgftID: CircuitString;
        businessPANID: CircuitString;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
    toInput: (x: {
        companyID: CircuitString;
        companyName: CircuitString;
        dgftID: CircuitString;
        businessPANID: CircuitString;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        companyID: CircuitString;
        companyName: CircuitString;
        dgftID: CircuitString;
        businessPANID: CircuitString;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        companyID: {
            values: {
                value: string;
            }[];
        };
        companyName: {
            values: {
                value: string;
            }[];
        };
        dgftID: {
            values: {
                value: string;
            }[];
        };
        businessPANID: {
            values: {
                value: string;
            }[];
        };
        currEXIMComplianceStatusCode: string;
    };
    fromJSON: (x: {
        companyID: {
            values: {
                value: string;
            }[];
        };
        companyName: {
            values: {
                value: string;
            }[];
        };
        dgftID: {
            values: {
                value: string;
            }[];
        };
        businessPANID: {
            values: {
                value: string;
            }[];
        };
        currEXIMComplianceStatusCode: string;
    }) => {
        companyID: CircuitString;
        companyName: CircuitString;
        dgftID: CircuitString;
        businessPANID: CircuitString;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
    empty: () => {
        companyID: CircuitString;
        companyName: CircuitString;
        dgftID: CircuitString;
        businessPANID: CircuitString;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
};
declare class InternationalTradeComplianceData extends InternationalTradeComplianceData_base {
}
export declare const proofOfCorporateRegistrationCompliance: {
    name: string;
    compile: (options?: {
        cache?: import("o1js/dist/node/lib/proof-system/cache").Cache | undefined;
        forceRecompile?: boolean | undefined;
    } | undefined) => Promise<{
        verificationKey: {
            data: string;
            hash: import("o1js/dist/node/lib/provable/field").Field;
        };
    }>;
    verify: (proof: Proof<import("o1js/dist/node/lib/provable/field").Field, CorporateRegistrationPublicOutput>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        proveCompliance: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
    publicOutputType: typeof CorporateRegistrationPublicOutput;
    privateInputTypes: {
        proveCompliance: [typeof CorporateRegistrationData, typeof Signature, typeof Signature, typeof PublicKey];
    };
    rawMethods: {
        proveCompliance: (publicInput: import("o1js/dist/node/lib/provable/field").Field, ...args: [CorporateRegistrationData, Signature, Signature, PublicKey] & any[]) => Promise<CorporateRegistrationPublicOutput>;
    };
} & {
    proveCompliance: (publicInput: import("o1js/dist/node/lib/provable/field").Field, ...args: [CorporateRegistrationData, Signature, Signature, PublicKey] & any[]) => Promise<Proof<import("o1js/dist/node/lib/provable/field").Field, CorporateRegistrationPublicOutput>>;
};
export declare const proofOfInternationalTradeCompliance: {
    name: string;
    compile: (options?: {
        cache?: import("o1js/dist/node/lib/proof-system/cache").Cache | undefined;
        forceRecompile?: boolean | undefined;
    } | undefined) => Promise<{
        verificationKey: {
            data: string;
            hash: import("o1js/dist/node/lib/provable/field").Field;
        };
    }>;
    verify: (proof: Proof<import("o1js/dist/node/lib/provable/field").Field, InternationalTradeCompliancePublicOutput>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        proveCompliance: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
    publicOutputType: typeof InternationalTradeCompliancePublicOutput;
    privateInputTypes: {
        proveCompliance: [typeof InternationalTradeComplianceData, typeof Signature, typeof Signature, typeof PublicKey];
    };
    rawMethods: {
        proveCompliance: (publicInput: import("o1js/dist/node/lib/provable/field").Field, ...args: [InternationalTradeComplianceData, Signature, Signature, PublicKey] & any[]) => Promise<InternationalTradeCompliancePublicOutput>;
    };
} & {
    proveCompliance: (publicInput: import("o1js/dist/node/lib/provable/field").Field, ...args: [InternationalTradeComplianceData, Signature, Signature, PublicKey] & any[]) => Promise<Proof<import("o1js/dist/node/lib/provable/field").Field, InternationalTradeCompliancePublicOutput>>;
};
export {};
