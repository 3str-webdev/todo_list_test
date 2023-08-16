"use client";

import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux-hooks";
import { toggleTheme } from "@/store/slices/theme-slice";
import { UIButton } from "@/ui";
import { MoonIcon, SunIcon } from "@/ui/icons";
import styled from "styled-components";

const ThemeToggleSt = styled(UIButton)`
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const themeAlias = useAppSelector((store) => store.themeReducer.alias);

  const getThemeButtonContent = () => {
    if (themeAlias === "dark") {
      return <SunIcon width={25} height={25} />;
    }
    return <MoonIcon width={20} height={20} />;
  };

  const handleToggleThemeClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <ThemeToggleSt variant="clean" onClick={handleToggleThemeClick}>
      {getThemeButtonContent()}
    </ThemeToggleSt>
  );
};
