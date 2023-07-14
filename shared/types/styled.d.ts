// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: CSSProperties["color"];
      secondary: CSSProperties["color"];
      background: CSSProperties["color"];
      text: CSSProperties["color"];
    };
  }
}
