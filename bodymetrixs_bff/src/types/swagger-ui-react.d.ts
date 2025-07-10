declare module 'swagger-ui-react' {
  import { Component } from 'react';

  interface SwaggerUIProps {
    spec?: any;
    url?: string;
    docExpansion?: 'list' | 'full' | 'none';
    defaultModelsExpandDepth?: number;
    defaultModelExpandDepth?: number;
    tryItOutEnabled?: boolean;
    requestInterceptor?: (request: any) => any;
    responseInterceptor?: (response: any) => any;
    onComplete?: (system: any) => void;
    plugins?: any[];
    layout?: string;
    deepLinking?: boolean;
    persistAuthorization?: boolean;
    supportedSubmitMethods?: string[];
    validatorUrl?: string | null;
    withCredentials?: boolean;
    oauth2RedirectUrl?: string;
    initOAuth?: any;
    showMutatedRequest?: boolean;
    showRequestHeaders?: boolean;
    showExtensions?: boolean;
    showCommonExtensions?: boolean;
    maxDisplayedTags?: number;
    defaultModelRendering?: 'example' | 'model';
    displayOperationId?: boolean;
    displayRequestDuration?: boolean;
    filter?: string | boolean;
    showObjectSchemaExamples?: boolean;
    syntaxHighlight?: {
      activated?: boolean;
      theme?: string;
    };
    tryItOutEnabled?: boolean;
    requestSnippetsEnabled?: boolean;
    requestSnippets?: {
      generators?: any[];
      defaultExpanded?: boolean;
      languagesFilter?: string;
    };
    responseInterceptor?: (response: any) => any;
    requestInterceptor?: (request: any) => any;
    onComplete?: (system: any) => void;
    onFailure?: (error: any) => void;
    domNode?: HTMLElement;
    dom_id?: string;
    presets?: any[];
    plugins?: any[];
    layout?: string;
    deepLinking?: boolean;
    persistAuthorization?: boolean;
    supportedSubmitMethods?: string[];
    validatorUrl?: string | null;
    withCredentials?: boolean;
    oauth2RedirectUrl?: string;
    initOAuth?: any;
    showMutatedRequest?: boolean;
    showRequestHeaders?: boolean;
    showExtensions?: boolean;
    showCommonExtensions?: boolean;
    maxDisplayedTags?: number;
    defaultModelRendering?: 'example' | 'model';
    displayOperationId?: boolean;
    displayRequestDuration?: boolean;
    filter?: string | boolean;
    showObjectSchemaExamples?: boolean;
    syntaxHighlight?: {
      activated?: boolean;
      theme?: string;
    };
    tryItOutEnabled?: boolean;
    requestSnippetsEnabled?: boolean;
    requestSnippets?: {
      generators?: any[];
      defaultExpanded?: boolean;
      languagesFilter?: string;
    };
  }

  class SwaggerUI extends Component<SwaggerUIProps> {}

  export default SwaggerUI;
} 