// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        500: CSSProperties["color"];
        400: CSSProperties["color"];
      };
      danger: {
        500: CSSProperties["color"];
      };
      background: CSSProperties["color"];
      text: CSSProperties["color"];
    };
  }
}
