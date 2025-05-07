import React from "react";
import styles from "./FlexContainer.module.scss";

// Literal union types for props
type JustifyOption = "center" | "space-between" | "space-evenly";
type DirectionOption = "row" | "row-reverse" | "column" | "column-reverse";
type WrapOption = "nowrap" | "wrap" | "wrap-reverse";

interface FlexContainerProps {
  justify?: JustifyOption;
  direction?: DirectionOption;
  wrap?: WrapOption;
  children: React.ReactNode;
}

const FlexContainer: React.FC<FlexContainerProps> = ({
  justify = "space-evenly",
  direction = "row",
  wrap = "nowrap",
  children,
}) => {
  const containerStyle: React.CSSProperties = {
    justifyContent: justify,
    flexDirection: direction,
    flexWrap: wrap,
  };

  return (
    <div className={styles.flexContainer} style={containerStyle}>
      {children}
    </div>
  );
};

export default FlexContainer;
