var fs = require('fs');

var soap = require('soap');

var url = 'http://localhost:4000/soapDRC?wsdl';
var args = {
    "catalogueItemNotificationType": {
        "CatalogueItemNotificationType": [
            {
                "creationDateTime": "2016-06-16T07:32:00.2517693+00:00",
                "documentStatusCode": "COPY",
                "documentActionCode": "ADD",
                "catalogueItemNotificationIdentification": {
                    "entityIdentification": "CatalogueItemNotification-c3b850c2-3af7-4324-a996-9176908aba4e",
                    "contentOwner": {
                        "gln": "5716161000005"
                    }
                },
                "isReload": false,
                "catalogueItem": {
                    "catalogueItemState": {
                        "catalogueItemStateCode": "REGISTERED"
                    },
                    "tradeItem": {
                        "gtin": "03751102941056",
                        "isTradeItemABaseUnit": "false",
                        "isTradeItemAConsumerUnit": "true",
                        "isTradeItemADespatchUnit": "false",
                        "isTradeItemAnInvoiceUnit": "true",
                        "isTradeItemAnOrderableUnit": "true",
                        "tradeItemUnitDescriptorCode": "CASE",
                        "informationProviderOfTradeItem": {
                            "gln": "5716161000005",
                            "partyName": "GS1Trade Sync DS UI Test"
                        },
                        "gdsnTradeItemClassification": {
                            "gpcCategoryCode": "10000641"
                        },
                        "nextLowerLevelTradeItemInformation": {
                            "quantityOfChildren": "1",
                            "totalQuantityOfNextLowerLevelTradeItem": "50",
                            "childTradeItem": {
                                "gtin": "01666879914788",
                                "quantityOfNextLowerLevelTradeItem": "50"
                            }
                        },
                        "targetMarket": {
                            "targetMarketCountryCode": "208"
                        },
                        "tradeItemInformation": {
                            "extension": {
                                "deliveryPurchasingInformationModule": {
                                    "attributes": {
                                        "xsi:schemaLocation": "urn:gs1:gdsn:delivery_purchasing_information:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/DeliveryPurchasingInformationModule.xsd"
                                    },
                                    "deliveryPurchasingInformation": {
                                        "startAvailabilityDateTime": "2016-05-04T01:20:50+00:00"
                                    }
                                },
                                "dutyFeeTaxInformationModule": {
                                    "attributes": {
                                        "xsi:schemaLocation": "urn:gs1:gdsn:duty_fee_tax_information:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/DutyFeeTaxInformationModule.xsd"
                                    },
                                    "dutyFeeTaxInformation": {
                                        "dutyFeeTaxAgencyCode": "245",
                                        "dutyFeeTaxTypeCode": "VAT",
                                        "dutyFeeTax": {
                                            "dutyFeeTaxCategoryCode": "STANDARD"
                                        }
                                    }
                                },
                                "regulatedTradeItemModule": {
                                    "attributes": {
                                        "xsi:schemaLocation": "urn:gs1:gdsn:regulated_trade_item:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/RegulatedTradeItemModule.xsd"
                                    }
                                },
                                "tradeItemDescriptionModule": {
                                    "attributes": {
                                        "xsi:schemaLocation": "urn:gs1:gdsn:trade_item_description:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/TradeItemDescriptionModule.xsd"
                                    },
                                    "tradeItemDescriptionInformation": {
                                        "functionalName": {
                                            "attributes": {
                                                "languageCode": "da"
                                            },
                                            "$value": "srtzujkl"
                                        },
                                        "brandNameInformation": {
                                            "brandName": "defvg"
                                        }
                                    }
                                },
                                "tradeItemMeasurementsModule": {
                                    "attributes": {
                                        "xsi:schemaLocation": "urn:gs1:gdsn:trade_item_measurements:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/TradeItemMeasurementsModule.xsd"
                                    },
                                    "tradeItemMeasurements": {
                                        "depth": {
                                            "attributes": {
                                                "measurementUnitCode": "MMT"
                                            },
                                            "$value": "40"
                                        },
                                        "height": {
                                            "attributes": {
                                                "measurementUnitCode": "MMT"
                                            },
                                            "$value": "30"
                                        },
                                        "width": {
                                            "attributes": {
                                                "measurementUnitCode": "MMT"
                                            },
                                            "$value": "20"
                                        },
                                        "tradeItemWeight": {
                                            "grossWeight": {
                                                "attributes": {
                                                    "measurementUnitCode": "GRM"
                                                },
                                                "$value": "5000000"
                                            }
                                        }
                                    }
                                },
                                "variableTradeItemInformationModule": {
                                    "attributes": {
                                        "xsi:schemaLocation": "urn:gs1:gdsn:variable_trade_item_information:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/VariableTradeItemInformationModule.xsd"
                                    },
                                    "variableTradeItemInformation": {
                                        "isTradeItemAVariableUnit": "true"
                                    }
                                }
                            }
                        },
                        "tradeItemSynchronisationDates": {
                            "lastChangeDateTime": "2016-05-30T13:02:06.0000281+00:00",
                            "effectiveDateTime": "2016-05-30T08:56:06+00:00",
                            "publicationDateTime": "2016-05-30T08:56:06+00:00"
                        }
                    },
                    "catalogueItemChildItemLink": [
                        {
                            "quantity": "50",
                            "catalogueItem": {
                                "catalogueItemState": {
                                    "catalogueItemStateCode": "REGISTERED"
                                },
                                "tradeItem": {
                                    "gtin": "01666879914788",
                                    "isTradeItemABaseUnit": "true",
                                    "isTradeItemAConsumerUnit": "true",
                                    "isTradeItemADespatchUnit": "false",
                                    "isTradeItemAnInvoiceUnit": "true",
                                    "isTradeItemAnOrderableUnit": "false",
                                    "tradeItemUnitDescriptorCode": "BASE_UNIT_OR_EACH",
                                    "informationProviderOfTradeItem": {
                                        "gln": "5716161000005",
                                        "partyName": "GS1Trade Sync DS UI Test"
                                    },
                                    "gdsnTradeItemClassification": {
                                        "gpcCategoryCode": "10000641"
                                    },
                                    "targetMarket": {
                                        "targetMarketCountryCode": "208"
                                    },
                                    "tradeItemInformation": {
                                        "extension": {
                                            "deliveryPurchasingInformationModule": {
                                                "attributes": {
                                                    "xsi:schemaLocation": "urn:gs1:gdsn:delivery_purchasing_information:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/DeliveryPurchasingInformationModule.xsd"
                                                },
                                                "deliveryPurchasingInformation": {
                                                    "startAvailabilityDateTime": "2016-05-13T04:10:00+00:00"
                                                }
                                            },
                                            "dutyFeeTaxInformationModule": {
                                                "attributes": {
                                                    "xsi:schemaLocation": "urn:gs1:gdsn:duty_fee_tax_information:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/DutyFeeTaxInformationModule.xsd"
                                                },
                                                "dutyFeeTaxInformation": {
                                                    "dutyFeeTaxAgencyCode": "245",
                                                    "dutyFeeTaxTypeCode": "VAT",
                                                    "dutyFeeTax": {
                                                        "dutyFeeTaxCategoryCode": "STANDARD"
                                                    }
                                                }
                                            },
                                            "marketingInformationModule": {
                                                "attributes": {
                                                    "xsi:schemaLocation": "urn:gs1:gdsn:marketing_information:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/MarketingInformationModule.xsd"
                                                },
                                                "marketingInformation": {
                                                    "specialItemCode": "DYNAMIC_ASSORTMENT"
                                                }
                                            },
                                            "regulatedTradeItemModule": {
                                                "attributes": {
                                                    "xsi:schemaLocation": "urn:gs1:gdsn:regulated_trade_item:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/RegulatedTradeItemModule.xsd"
                                                },
                                                "regulatoryInformation": [
                                                    {
                                                        "regulatoryAct": "834_2007_Class",
                                                        "regulatoryAgency": "EU"
                                                    },
                                                    {
                                                        "regulatoryAct": "834_2007_Certification",
                                                        "regulatoryAgency": "EU"
                                                    },
                                                    {
                                                        "regulatoryAct": "834_2007_QualitySymbol",
                                                        "regulatoryAgency": "EU"
                                                    }
                                                ]
                                            },
                                            "tradeItemDescriptionModule": {
                                                "attributes": {
                                                    "xsi:schemaLocation": "urn:gs1:gdsn:trade_item_description:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/TradeItemDescriptionModule.xsd"
                                                },
                                                "tradeItemDescriptionInformation": {
                                                    "functionalName": {
                                                        "attributes": {
                                                            "languageCode": "da"
                                                        },
                                                        "$value": "wofwof"
                                                    },
                                                    "brandNameInformation": {
                                                        "brandName": "Woof"
                                                    }
                                                }
                                            },
                                            "tradeItemMeasurementsModule": {
                                                "attributes": {
                                                    "xsi:schemaLocation": "urn:gs1:gdsn:trade_item_measurements:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/TradeItemMeasurementsModule.xsd"
                                                },
                                                "tradeItemMeasurements": {
                                                    "depth": {
                                                        "attributes": {
                                                            "measurementUnitCode": "MMT"
                                                        },
                                                        "$value": "78"
                                                    },
                                                    "height": {
                                                        "attributes": {
                                                            "measurementUnitCode": "MMT"
                                                        },
                                                        "$value": "88"
                                                    },
                                                    "width": {
                                                        "attributes": {
                                                            "measurementUnitCode": "MMT"
                                                        },
                                                        "$value": "90"
                                                    },
                                                    "tradeItemWeight": {
                                                        "grossWeight": {
                                                            "attributes": {
                                                                "measurementUnitCode": "GRM"
                                                            },
                                                            "$value": "604"
                                                        }
                                                    }
                                                }
                                            },
                                            "variableTradeItemInformationModule": {
                                                "attributes": {
                                                    "xsi:schemaLocation": "urn:gs1:gdsn:variable_trade_item_information:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/VariableTradeItemInformationModule.xsd"
                                                },
                                                "variableTradeItemInformation": {
                                                    "isTradeItemAVariableUnit": "false"
                                                }
                                            }
                                        }
                                    },
                                    "tradeItemSynchronisationDates": {
                                        "lastChangeDateTime": "2016-05-30T13:01:00.0009241+00:00",
                                        "effectiveDateTime": "2016-05-30T08:54:42+00:00",
                                        "publicationDateTime": "2016-05-30T08:54:42+00:00"
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        ]
    },
    "documentCommandEnumeration": "ADD"
};

soap.createClient(url, {}, function(err, client){
    if (err) {
        console.error('failed to create client', err);
    }else {
        console.log('created client');
        setInterval(function(){
            client.ReceiveCatalogueItemNotification(args, function(err, result){
                if (err) { console.error("soap action failed", err); }
                else { console.log("called", result); }
            });
        }, 1000);
    }
});