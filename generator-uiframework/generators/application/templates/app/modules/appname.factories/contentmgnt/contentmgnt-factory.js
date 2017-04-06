(function () {
    'use strict';

    angular.module('appname.factories.contentmgnt', []).factory('contentManagementFactory', ContentManagement);
    ContentManagement.$inject = [];

    function ContentManagement() {
        ContentManagement.global = {
          "errorMsg": {
            "unAuthorized": "Not Authorized",
            "genericError": "An unexpected error has occurred with Rate Finder service, please try again."
          },
          "noData": '---',
          "lockedFieldMsg": 'This field is locked and cannot be edited.'
        };
        ContentManagement.header = {
          "userName": "User",
          "userBsb": "BSB",
          "branchSuffix": "Branch"
        };
        ContentManagement.footer = {
            "copyrightLine1": "Our site and your online application are secure. Read more about online security",
            "copyrightLine2": "&nbsp;a division of Westpac banking Corporation ABN 33 007 457 141&#44; AFSL and Australian credit licence 233714&#46;",
            "brandName": {
                "wbc": "Westpac",
                "stg": "St&#46; George",
                "bom": "Bank of Melbourne",
                "bsa": "Bank South Australia"
            }
        };

        ContentManagement.preferences = {
            "header": {
                "title": "User Preferences",
                "errorMsg": {
                    "genericError": ContentManagement.global.errorMsg.genericError,
                    "invalidBsb": "The BSB you entered was invalid, please re-enter your BSB"
                }
            },
            "footer": {
                "actions": {
                    "cancel": "Cancel",
                    "submit": "Update"
                }
            },
            "body": {
                "role": "Role",
                "brand": "Brand",
                "bsb": "BSB",
                "branch": "Branch",
                "contactNum": "Contact Number",
                "validation": {
                    "contactNumber": "Please enter digits only",
                    "bsb": "Please enter valid bsb"
                },
                "placeholder": {
                    "bsb": "BSB number",
                    "contactNumber": "Contact number"
                }
            }
          };

          ContentManagement.createCustomer = {
              "validationErrorMsg": {
                  "title": "Please provide a title.",
                  "dob": {
                      "required": "Please provide a date of birth.",
                      "invalid": "Please provide valid date of birth.",
                      "minAgeWbc": "The minimum age for this product is 12 years.",
                      "minAgeStg": "The minimum age for this product is 14 years."
                  },
                  "givenName": {
                      "required": "Please provide a given name.",
                      "invalid": "Please provide valid given name."
                  },
                  "familyName": {
                      "required": "Please provide a family name.",
                      "invalid": "Please provide a valid family name."
                  },
                  "otherName": {
                      "required": "Please provide other name.",
                      "invalid": "Please provide a valid other name."
                  },
                  "mobile": {
                      "required": "Please provide a mobile number.",
                      "invalid": "Please provide a valid mobile number.",
                      "select" :  "Please select a mobile number."
                  },
                  "email": {
                      "required": "Please provide an email address.",
                      "invalid": "Please provide a valid email address.",
                      "select" :  "Please select an email address."
                  },
                  "idvdoc": {
                      required: "Please enter the original document?"
                  },
                  "passportNum": {
                      required: "Please enter the passport number.",
                      invalid: "Please enter a valid passport number."
                  },
                  "issueDate": {
                      required: "Please enter the issue date.",
                      issue: "Issue date must be a past date."
                  },
                  "expiryDate": {
                      required: "Please enter the expiry date.",
                      expiry: "Expiry date must be a future date."
                  },
                  "issuerCountry": {
                      required: "Please enter the Issued by?",
                  },
                  "licenceNum": {
                      required: "Please enter the Licence number.",
                      invalid: "Please enter a valid Licence number."
                  },
                  "documentNum": {
                      required: "Please enter the Document number.",
                      invalid: "Please enter a valid Document number."
                  },
                  "refNum": {
                      required: "Please enter the Reference number.",
                      invalid: "Please enter a valid Reference number."
                  },
                  "medicareNumber": {
                      required: "Please enter the Medicare number.",
                      invalid: "Please enter a valid Medicare number."
                  },
                  "residentialAddress": "Please enter residential address.",
                  "street1": {
                      required: "Please enter street address line 1.",
                      invalid: "Please enter a valid street address."
                  },
                  "suburb": {
                      required: "Please enter suburb.",
                      invalid: "Please enter a valid suburb."
                  },
                  "state": "Please select state.",
                  "postCode": {
                      required: "Please enter postcode.",
                      invalid: "Please enter a valid postcode."
                  },
                  "tfn": {
                      "option": {
                          required: "Please select a TFN option"
                      },
                      "exemption": {
                          required: "Please select a TFN exemption"
                      },

                      "number": {
                          required: "Please enter TFN",
                          invalid: "Please enter a valid TFN"
                      }
                  },
                  "password": {
                      required: "Password is required",
                      invalid: "Invalid password",
                      mismatch: "Passwords do not match"
                  },
                  "studentExpiryDate": {
                      required: "Student expiry date is required"
                  },
                  "empType": "Please provide an employment type.",
                  "option": "Please select an option.",
                  "sof": "Please select source of funds.",
                  "sow": "Please select source of wealth.",
                  "idvReqd": "Please identify the customer"
              }
          };

        return ContentManagement;
    }

})();
