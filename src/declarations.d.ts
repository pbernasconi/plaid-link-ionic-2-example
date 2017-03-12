/*
  Declaration files are how the Typescript compiler knows about the type information(or shape) of an object.
  They're what make intellisense work and make Typescript know all about your code.

  A wildcard module is declared below to allow third party libraries to be used in an app even if they don't
  provide their own type declarations.

  To learn more about using third party libraries in an Ionic app, check out the docs here:
  http://ionicframework.com/docs/v2/resources/third-party-libs/

  For more info on type definition files, check out the Typescript docs here:
  https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html
*/
declare module '*';

declare const Plaid: PlaidLink;

interface PlaidLink {
  create: (config: LinkConfig) => LinkHandler;
  readonly version: string;
}

interface LinkHandler {
  open: (institution?: string) => void;
  exit: (config?: LinkHandlerExitConfig) => void;
}

interface LinkConfig {
  clientName: string;
  env: string;
  forceIframe?: boolean;
  isWebView?: boolean;
  key: string;
  product: string[];
  selectAccount?: boolean;
  token?: string;
  webhook?: string;
  onLoad: () => void;
  onExit: (error: LinkOnExitError, metadata: LinkOnExitMetadata) => void;
  onSuccess: (public_token: string, metadata: LinkOnSuccessMetadata) => void;
}

interface LinkOnSuccessMetadata {
  institution?: { name: string, institution_id: string };
  account?: { id: string, name: string };
  link_request_id?: string;
}

interface LinkOnExitMetadata {
  institution?: { name: string, institution_id: string };
  account?: { id: string, name: string };
  request_id?: string;
}

interface LinkOnExitError {
  display_message: string,
  error_code: string,
  error_message: string
  error_type: string,
}

interface LinkHandlerExitConfig {
  force?: boolean;
}
