import { expect, test } from "vitest";
import { OpenFeature } from "@openfeature/web-sdk";
import { HypertuneProvider } from "../src/HypertuneProvider";
import { Expression } from "hypertune/dist/shared";

const reducedExpression: Expression = {
  id: "RtCXbMJot45Nr_1U4y9yo",
  logs: {
    events: {},
    exposures: {},
    evaluations: {},
  },
  type: "ObjectExpression",
  fields: {
    root: {
      id: "bvoOcm9EO5ek4oBK3caMT",
      body: {
        id: "Dj9koR_tXvPAOoeCkKorQ",
        logs: {
          events: {},
          exposures: {},
          evaluations: {},
        },
        type: "ObjectExpression",
        fields: {
          booleanFlag: {
            id: "AH8sIRGRJeC3YmekbsX1Y",
            logs: {
              evaluations: {
                BVlvsltAslOkPKvo1_trq: 1,
              },
              events: {},
              exposures: {},
            },
            type: "SwitchExpression",
            cases: [
              {
                id: "R8WNfrIeMP1KEE2n8Vzr1",
                when: {
                  a: {
                    id: "pULYaVuIx0IdP9GazXW8K",
                    logs: {
                      events: {},
                      exposures: {},
                      evaluations: {},
                    },
                    type: "GetFieldExpression",
                    object: {
                      id: "puOQ1BDlj8BiwtHe5jANM",
                      logs: {
                        events: {},
                        exposures: {},
                        evaluations: {},
                      },
                      type: "VariableExpression",
                      valueType: {
                        type: "ObjectValueType",
                        objectTypeName: "Query_root_args",
                      },
                      variableId: "axN8RTvRB2uQmy4f6g7wI",
                    },
                    fieldPath: "context > environment",
                    valueType: {
                      type: "EnumValueType",
                      enumTypeName: "Environment",
                    },
                  },
                  b: {
                    id: "XGk6Dpcw5AKWgBpFEn5Bc",
                    logs: {
                      events: {},
                      exposures: {},
                      evaluations: {},
                    },
                    type: "ListExpression",
                    items: [
                      {
                        id: "frVCE0IMemYqv46OQnIRM",
                        logs: {
                          events: {},
                          exposures: {},
                          evaluations: {},
                        },
                        type: "EnumExpression",
                        value: "test",
                        valueType: {
                          type: "EnumValueType",
                          enumTypeName: "Environment",
                        },
                      },
                    ],
                    valueType: {
                      type: "ListValueType",
                      itemValueType: {
                        type: "EnumValueType",
                        enumTypeName: "Environment",
                      },
                    },
                  },
                  id: "c2e05BGTA70UC7M5FDzkm",
                  logs: {
                    events: {},
                    exposures: {},
                    evaluations: {},
                  },
                  type: "ComparisonExpression",
                  operator: "in",
                  valueType: {
                    type: "BooleanValueType",
                  },
                },
                then: {
                  id: "0gkSpNqxkOkLYTE6ilK3j",
                  logs: {
                    events: {},
                    exposures: {},
                    evaluations: {},
                  },
                  type: "BooleanExpression",
                  value: true,
                  valueType: {
                    type: "BooleanValueType",
                  },
                },
              },
              {
                id: "HkQ82oreQczxOHefkdge9",
                when: {
                  a: {
                    id: "9A08u8rzT3YcGHp0jNRJt",
                    logs: {
                      events: {},
                      exposures: {},
                      evaluations: {},
                    },
                    type: "GetFieldExpression",
                    object: {
                      id: "pmE2yE5xXTKbklnCTtAj1",
                      logs: {
                        events: {},
                        exposures: {},
                        evaluations: {},
                      },
                      type: "VariableExpression",
                      valueType: {
                        type: "ObjectValueType",
                        objectTypeName: "Query_root_args",
                      },
                      variableId: "axN8RTvRB2uQmy4f6g7wI",
                    },
                    fieldPath: "context > user > id",
                    valueType: {
                      type: "StringValueType",
                    },
                  },
                  b: {
                    id: "4jTGbHR6xjeHsqf-JzTuT",
                    logs: {
                      events: {},
                      exposures: {},
                      evaluations: {},
                    },
                    type: "ListExpression",
                    items: [
                      {
                        id: "FI6rLTqkjAK4bTYL83Kum",
                        logs: {
                          events: {},
                          exposures: {},
                          evaluations: {},
                        },
                        type: "StringExpression",
                        value: "user_123",
                        valueType: {
                          type: "StringValueType",
                        },
                      },
                      {
                        id: "Uc4gzGezE_2zz6R4HCxx4",
                        logs: {
                          events: {},
                          exposures: {},
                          evaluations: {},
                        },
                        type: "StringExpression",
                        value: "user_456",
                        valueType: {
                          type: "StringValueType",
                        },
                      },
                    ],
                    valueType: {
                      type: "ListValueType",
                      itemValueType: {
                        type: "StringValueType",
                      },
                    },
                  },
                  id: "qZGiw2itpaYW4D61T97c7",
                  logs: {
                    events: {},
                    exposures: {},
                    evaluations: {},
                  },
                  type: "ComparisonExpression",
                  operator: "in",
                  valueType: {
                    type: "BooleanValueType",
                  },
                },
                then: {
                  id: "I-4ZXLYJI75q78gdZPU-N",
                  logs: {
                    events: {},
                    exposures: {},
                    evaluations: {},
                  },
                  type: "BooleanExpression",
                  value: true,
                  valueType: {
                    type: "BooleanValueType",
                  },
                },
              },
            ],
            control: {
              id: "5AuhUz2QF3ATDuR2HBOdw",
              logs: {
                events: {},
                exposures: {},
                evaluations: {},
              },
              type: "BooleanExpression",
              value: true,
              valueType: {
                type: "BooleanValueType",
              },
            },
            default: {
              id: "U8pZbG1hsn9tIlcOsPayq",
              logs: {
                events: {},
                exposures: {},
                evaluations: {},
              },
              type: "BooleanExpression",
              value: false,
              valueType: {
                type: "BooleanValueType",
              },
            },
            valueType: {
              type: "BooleanValueType",
            },
          },
          stringFlag: {
            id: "ZDhmKeNf4nyqooWaPyLBb",
            logs: {
              evaluations: {
                "2ozQVavXQtcvvUFiDNpPH": 1,
              },
              events: {},
              exposures: {},
            },
            type: "StringExpression",
            valueType: {
              type: "StringValueType",
            },
            value: "TopLevelString",
          },
          floatFlag: {
            id: "hoY_czwsAgtqCI-g08qD9",
            logs: {
              evaluations: {
                "gGeQ98UkUTGScpXWiY-Oe": 1,
              },
              events: {},
              exposures: {},
            },
            type: "FloatExpression",
            valueType: {
              type: "FloatValueType",
            },
            value: 2.5,
          },
          integerFlag: {
            id: "8RLFIAirGwefu3IKrVGtC",
            logs: {
              evaluations: {
                TaUWahxBotyj0NAQutFZQ: 1,
              },
              events: {},
              exposures: {},
            },
            type: "IntExpression",
            valueType: {
              type: "IntValueType",
            },
            value: 10,
          },
          enumFlag: {
            id: "fDb3U3bMUi5f4_76CRvN6",
            logs: {
              evaluations: {
                "BPyo-n1mtgpx4qwJ_BQpw": 1,
              },
              events: {},
              exposures: {},
            },
            type: "GetFieldExpression",
            valueType: {
              type: "EnumValueType",
              enumTypeName: "Environment",
            },
            object: {
              id: "j1F9C0QlQuRw1VSQd6BFf",
              logs: {
                evaluations: {},
                events: {},
                exposures: {},
              },
              type: "VariableExpression",
              valueType: {
                type: "ObjectValueType",
                objectTypeName: "Query_root_args",
              },
              variableId: "axN8RTvRB2uQmy4f6g7wI",
            },
            fieldPath: "context > environment",
          },
          group: {
            id: "TyN12oHoBpAIk40akqH2P",
            logs: {
              evaluations: {
                v7_CiDS_zamdzao7K1U2G: 1,
              },
              events: {},
              exposures: {},
            },
            type: "ObjectExpression",
            valueType: {
              type: "ObjectValueType",
              objectTypeName: "Group",
            },
            objectTypeName: "Group",
            fields: {
              stringFlag: {
                id: "yIWVgWlxfKcD8um_jpz8u",
                logs: {
                  evaluations: {
                    "26-DNVqsRXcb6pfu9xJys": 1,
                  },
                  events: {},
                  exposures: {},
                },
                type: "StringExpression",
                valueType: {
                  type: "StringValueType",
                },
                value: "NestedString",
              },
              booleanFlag: {
                id: "DfwaPHPR0jCYAO8SCX7Yx",
                logs: {
                  evaluations: {
                    "NH-8fMl234bakZc7vqE1J": 1,
                    "B2lpk36TTnbH-avi0fkgr": 1,
                    qGpze38_SnHo_bO5bj_7n: 1,
                  },
                  events: {},
                  exposures: {},
                },
                type: "BooleanExpression",
                valueType: {
                  type: "BooleanValueType",
                },
                value: true,
              },
              enumFlag: {
                id: "M7wBaYs_ptkpHcvGtaVDX",
                logs: {
                  evaluations: {
                    Pzc5kxTq9PRhswbyA7vrQ: 1,
                  },
                  events: {},
                  exposures: {},
                },
                type: "GetFieldExpression",
                valueType: {
                  type: "EnumValueType",
                  enumTypeName: "Environment",
                },
                object: {
                  id: "N81X8QPlxDBc0fZhwpXLy",
                  logs: {
                    evaluations: {},
                    events: {},
                    exposures: {},
                  },
                  type: "VariableExpression",
                  valueType: {
                    type: "ObjectValueType",
                    objectTypeName: "Query_root_args",
                  },
                  variableId: "axN8RTvRB2uQmy4f6g7wI",
                },
                fieldPath: "context > environment",
              },
              list: {
                id: "ZlYcRHM7xoiJU76cQc6FT",
                logs: {
                  evaluations: {
                    t9_I8ztEi32kqdOqN9Gfy: 1,
                  },
                  events: {},
                  exposures: {},
                },
                type: "ListExpression",
                valueType: {
                  type: "ListValueType",
                  itemValueType: {
                    type: "StringValueType",
                  },
                },
                items: [
                  {
                    id: "jBDFUZZ3k_PBYM07m4UJB",
                    logs: {
                      evaluations: {},
                      events: {},
                      exposures: {},
                    },
                    type: "StringExpression",
                    valueType: {
                      type: "StringValueType",
                    },
                    value: "Item1",
                  },
                  {
                    id: "CYY-lO7briOSCLAmiTao5",
                    logs: {
                      evaluations: {},
                      events: {},
                      exposures: {},
                    },
                    type: "StringExpression",
                    valueType: {
                      type: "StringValueType",
                    },
                    value: "Item2",
                  },
                ],
              },
            },
          },
          event: {
            id: "BB1zQER9dhyEFMTLfsAEf",
            logs: {
              evaluations: {
                "r4Kyn-FUOOmyEdNjK62Mj": 1,
              },
              events: {},
              exposures: {},
            },
            type: "NoOpExpression",
            valueType: {
              type: "VoidValueType",
            },
          },
        },
        valueType: {
          type: "ObjectValueType",
          objectTypeName: "Root",
        },
        objectTypeName: "Root",
      },
      logs: {
        events: {},
        exposures: {},
        evaluations: {},
      },
      type: "FunctionExpression",
      valueType: {
        type: "FunctionValueType",
        returnValueType: {
          type: "ObjectValueType",
          objectTypeName: "Root",
        },
        parameterValueTypes: [
          {
            type: "ObjectValueType",
            objectTypeName: "Query_root_args",
          },
        ],
      },
      parameters: [
        {
          id: "axN8RTvRB2uQmy4f6g7wI",
          name: "rootArgs",
        },
      ],
    },
  },
  metadata: {
    permissions: {
      user: {},
      group: {
        team: {
          write: "allow",
        },
      },
    },
  },
  valueType: {
    type: "ObjectValueType",
    objectTypeName: "Query",
  },
  objectTypeName: "Query",
};

test("HypertuneProvider", async () => {
  const provider = new HypertuneProvider({
    token: "test",
    initDataProvider: null,
    remoteLogging: { mode: "off" },
    initData: {
      reducedExpression,
      commitId: 1,
      hash: "",
      splits: {},
      commitConfig: { splitConfig: {} },
    },
    // localLogger: (level, message, metadata) => {
    //   console.log(`[${level}] ${message}: ${JSON.stringify(metadata)}`);
    // },
  });
  await OpenFeature.setProviderAndWait(provider, {
    environment: "test",
    user: {
      id: "user_123",
      name: "Test User",
      email: "test@hypertune.com",
    },
  });
  const client = OpenFeature.getClient();

  // Simple flags.
  expect(client.getBooleanValue("booleanFlag", false)).toBe(true);
  expect(client.getStringValue("stringFlag", "Fallback")).toBe(
    "TopLevelString"
  );
  expect(client.getStringValue("enumFlag", "Fallback")).toBe("test");
  expect(client.getNumberValue("integerFlag", 0)).toBe(10);
  expect(client.getNumberValue("floatFlag", 0)).toBe(2.5);

  // Nested values 
  expect(client.getBooleanValue("group.booleanFlag", false)).toBe(true);
  expect(client.getStringValue("group.stringFlag", "Fallback")).toBe(
    "NestedString"
  );
  expect(client.getStringValue("group.enumFlag", "Fallback")).toBe("test");

  // Event behaves like a boolean flag.
  expect(client.getBooleanValue("event", false)).toBe(true);

  expect(client.getObjectValue("group", {})).toMatchInlineSnapshot(`
    {
      "__typename": "Group",
      "booleanFlag": true,
      "enumFlag": "test",
      "list": [
        "Item1",
        "Item2",
      ],
      "stringFlag": "NestedString",
    }
  `);
  expect(client.getBooleanDetails("stringFlag", false)).toMatchInlineSnapshot(`
    {
      "errorCode": "TYPE_MISMATCH",
      "errorMessage": "Invalid value type for flagKey "stringFlag" expected "boolean" got "string".",
      "flagKey": "stringFlag",
      "flagMetadata": {},
      "reason": "ERROR",
      "value": false,
    }
  `);
});
