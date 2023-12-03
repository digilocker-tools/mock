/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/Your Pull URI Request API Path': {
    /**
     * Pull URI Request API .
     * @description The Pull URI Request API has to be implemented by the issuers and will be consumed by Digital Locker application. This API will be invoked when a citizen searches the issuer repository for his/her certificate. If the certificate data is Aadhaar seeded, the issuer may choose to use Aadhaar number as the search parameter. Digital Locker provides Aadhaar number, name and date of birth as on Aadhaar to the issuer API as additional parameters. The option for these Aadhaar based parameters can be selected while configuring this API in Digital Locker Partner’s Portal. If the certificate data is not Aadhaar seeded then the issuer may use any other unique parameter e.g. driving license number to search for a driving license. These custom parameters will be passed in the UDF elements as shown in the sample request below. The custom parameter(s) can be configured while configuring the API in the DigiLocker Partner’s Portal. The Digital Locker system will query the issuer repository to fetch the URI for any document that match the search criteria. The citizen can save this URI in his/her Digital Locker. It is strongly recommended that the issuer API validate that the name, date of birth details sent by DigiLocker in Aadhaar parameters match with the corresponding details on the certificate before returning the certificate data. This will ensure that only authentic owners get access to a certificate.
     */
    post: operations['Pull Uri'];
  };
  '/Your Pull DOC Request API Path': {
    /**
     * Pull Doc Request API.
     * @description The Pull Doc Request API has to be implemented by the issuers and will be consumed by Digital Locker system. This API will be invoked when the resident clicks on the URI displayed in the Issued documents section of DigLocker. The issuer API will by sending the certificate data. The certificate data should be sent in one of the two formats depending on the request send by Digital Locker:|- a. PDF document format b. XML format for machine readable metadata
     */
    post: operations['Pull Doc'];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    PullURIRequest: {
      /** @description API version. */
      ver: string;
      /** @description A timestamp value. This will be used to decode the keyHash element described below. */
      ts: string;
      /** @description Transaction id. */
      txn: string;
      /** @description Org Id is the user id provided to the Digital Locker application by the issuer application for accessing the API. */
      orgId: string;
      /**
       * @description Indicates the desired format of the certificate data in the response. Possible values of this attribute are:
       *   xml: for certificate data in machine readable xml format.
       *   pdf: for certificate data in printable pdf format
       *   both: for certificate data in both xml and pdf format. If the format attribute is not present in the request, then the API must return Base64 encoded PDF data in the response. Please see the response section below for more details
       */
      format: string;
      DocDetails: {
        /**
         * @description Digital Locker will pass the document type being searched in this parameter.
         * @example Pdf
         */
        DocType: string;
        /**
         * @description A unique 36 character DigiLocker Id of the user account.
         * @example 123e4567-e89b-12d3-a456-426655440000
         */
        DigiLockerId: string;
        /**
         * @description Aadhaar number of the DigiLocker user searching for the document/certificate. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.
         * @example 123443211122
         */
        UID: string;
        /**
         * @description Name of the DigiLocker user searching for the document/certificate as on Aadhaar. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.
         * @example Sunil
         */
        FullName: string;
        /**
         * @description Date of birth of the DigiLocker user searching for the document/certificate as on Aadhaar in DD-MM-YYYY format. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.
         * @example 09-08-1989
         */
        DOB: string;
        /** @description The base 64 encoded contents of JPEG photograph as on Aadhaar. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal. */
        Photo: string;
        /** @description User defined search parameters to search a unique document/certificate. The <UDF> may be <RollNo> for CBSE, <RegistrationNo> for Transportation Dept. and <PAN> for Income Tax Dept. The search parameters for the API will be configured in the issuer portal of Digital Locker while configuring this API. */
        UDF1: string;
        UDF2: string;
        UDF3: string;
        UDFn: string;
      };
    };
    PullURIResponse: {
      ResponseStatus: {
        /** @description 1 for success, 0 for error and 9 for pending. */
        Status: string;
        /** @description A timestamp value as sent in the request. */
        ts: string;
        /** @description Transaction id value as sent in the request. */
        txn: string;
      };
      /** @description Issuer can add meta content specific to document here. */
      DocDetails: {
        /**
         * @description The document type sent in the original request.
         * @example INCER
         */
        DocType: string;
        /**
         * @description A unique 36 character DigiLocker Id as sent in the original request.
         * @example 123e4567-e89b-12d3-a456-426655440000
         */
        DigiLockerId: string;
        /**
         * @description The Aadhaar number if sent in the original request.
         * @example 123412341234
         */
        UID: string;
        /**
         * @description The full name if sent in the original request.
         * @example Sunil Kumar
         */
        FullName: string;
        /**
         * @description The date of birth if sent in the original request.
         * @example 31-12-1990
         */
        DOB: string;
        /**
         * @description Search parameters sent in the original request.
         * @example 1333
         */
        UDF1: string;
        /**
         * @description Search parameters sent in the original request.
         * @example 2016
         */
        UDF2: string;
        /**
         * @description URI corresponding to the search criteria that identifies the document uniquely.
         * @example in.gov.dept.state-INCER-1234567
         */
        URI: string;
        /** @description Enclose the Base64 byte encoded contents of PDF file in this element. */
        DocContent: string;
        /** @description Enclose the base64 byte encoded certificate metadata in XML format. The DataContent element should be sent only if the original request contains format attribute as “xml” or “both”. */
        DataContent: string;
      };
    };
    PullDocRequest: {
      /** @description API version. */
      ver: string;
      /** @description A timestamp value. This will be used to decode the keyHash element described below. */
      ts: string;
      /** @description Transaction id. */
      txn: string;
      /** @description Org Id is the user id provided to the Digital Locker application by the issuer application for accessing the API. */
      orgId: string;
      /**
       * @description The certificate data in the response. Possible values of this attribute are:
       *   xml: for certificate data in machine readable xml format
       *   pdf: for certificate data in printable pdf format
       *   both: for certificate data in both xml and pdf format. If the format attribute is not present in the request, then the API must return Base64 encoded PDF data in the response. Please see the response section below for more details.
       */
      format: string;
      DocDetails: {
        /**
         * @description URI identifies the document uniquely.
         * @example in.gov.kerala.edistrict-INCER-123456
         */
        URI: string;
        /**
         * @description A unique 36 character DigiLocker Id of the user account.
         * @example 123e4567-e89b-12d3-a456-426655440000
         */
        DigiLockerId: string;
        /**
         * @description Aadhaar number of the DigiLocker user accessing the document/certificate. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.
         * @example 123456789012
         */
        UID: string;
        /**
         * @description Name of the DigiLocker user accessing the document/certificate as in Aadhaar. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.
         * @example Sunil Kumar
         */
        FullName: string;
        /**
         * @description Date of birth of the DigiLocker user accessing the document/certificate as in Aadhaar in DD-MM-YYYY format. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.
         * @example 31-12-1990
         */
        DOB: string;
      };
    };
    PullDocResponse: {
      ResponseStatus: {
        /** @description 1 for success, 0 for error. */
        Status: string;
        /** @description A timestamp value as sent in the request. */
        ts: string;
        /** @description Transaction id value as sent in the request. */
        txn: string;
      };
      /** @description Issuer can add meta content specific to document here. */
      DocDetails: {
        /** @description Enclose the Base64 byte encoded contents of PDF file in this element. The DocContent element should be sent only if the format attribute in the original request is sent as “pdf” or “both” or is absent. */
        DocContent: string;
        /** @description Enclose the Base64 byte encoded certificate metadata in XML format. The DataContent element should be sent only if the original request contains format attribute as “xml” or “both”. */
        DataContent: string;
      };
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {
  /**
   * Pull URI Request API .
   * @description The Pull URI Request API has to be implemented by the issuers and will be consumed by Digital Locker application. This API will be invoked when a citizen searches the issuer repository for his/her certificate. If the certificate data is Aadhaar seeded, the issuer may choose to use Aadhaar number as the search parameter. Digital Locker provides Aadhaar number, name and date of birth as on Aadhaar to the issuer API as additional parameters. The option for these Aadhaar based parameters can be selected while configuring this API in Digital Locker Partner’s Portal. If the certificate data is not Aadhaar seeded then the issuer may use any other unique parameter e.g. driving license number to search for a driving license. These custom parameters will be passed in the UDF elements as shown in the sample request below. The custom parameter(s) can be configured while configuring the API in the DigiLocker Partner’s Portal. The Digital Locker system will query the issuer repository to fetch the URI for any document that match the search criteria. The citizen can save this URI in his/her Digital Locker. It is strongly recommended that the issuer API validate that the name, date of birth details sent by DigiLocker in Aadhaar parameters match with the corresponding details on the certificate before returning the certificate data. This will ensure that only authentic owners get access to a certificate.
   */
  'Pull Uri': {
    parameters: {
      header?: {
        /** @description application/xml */
        'Content-Type'?: string;
        /** @description This is used for authentication and to verify the integrity of the request. DigiLocker calculates the hash message authentication code (hmac) of the HTTP request body using SHA256 hashing algorithm and the API Key provided by the issuer as the hashing key. The API Key is specified by the issuer while configuring the Pull Doc API in DigiLocker Partner Portal. The resulting hmac is converted to Base64 format and sent in this parameter. It is strongly recommended that the issuer API calculates the hmac of the HTTP request body, convert it to Base64 and match it with this parameter to ensure authenticity of the request. */
        'x-digilocker-hmac'?: string;
      };
    };
    requestBody?: {
      content: {
        'application/xml': components['schemas']['PullURIRequest'];
      };
    };
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/xml': components['schemas']['PullURIResponse'];
        };
      };
    };
  };
  /**
   * Pull Doc Request API.
   * @description The Pull Doc Request API has to be implemented by the issuers and will be consumed by Digital Locker system. This API will be invoked when the resident clicks on the URI displayed in the Issued documents section of DigLocker. The issuer API will by sending the certificate data. The certificate data should be sent in one of the two formats depending on the request send by Digital Locker:|- a. PDF document format b. XML format for machine readable metadata
   */
  'Pull Doc': {
    parameters: {
      header?: {
        /** @description application/xml */
        'Content-Type'?: string;
        /** @description This is used for authentication and to verify the integrity of the request. DigiLocker calculates the hash message authentication code (hmac) of the HTTP request body using SHA256 hashing algorithm and the API Key provided by the issuer as the hashing key. The API Key is specified by the issuer while configuring the Pull Doc API in DigiLocker Partner Portal. The resulting hmac is converted to Base64 format and sent in this parameter. It is strongly recommended that the issuer API calculates the hmac of the HTTP request body, convert it to Base64 and match it with this parameter to ensure authenticity of the request. */
        'x-digilocker-hmac'?: string;
      };
    };
    requestBody?: {
      content: {
        'application/xml': components['schemas']['PullDocRequest'];
      };
    };
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/xml': components['schemas']['PullDocResponse'];
        };
      };
    };
  };
}
