export default {
  common: {
    fontFamily: 'Roboto, Helvetica, Tahoma, Arial',
    textColor1: 'var(--text-color0)', //'rgba(255,255,255,0.9)',
    textColor2: 'var(--text-color0)', //'rgba(255,255,255,0.82)',
    primaryColor: 'var(--primary-color)',
    bodyColor: 'var(--bg-color)',
  },
  Input: {
    borderFocus: '1px solid #9747ff',
    borderHover: '1px solid #9747ff',
    boxShadowFocus: '0 0 0 2px rgba(225, 93, 239, 0.2)',
    borderRadius: '10px',
    border: '1px solid #32303a',
    placeholderColor: '#696c73',

    caretColor: '',
    color: '#282730',
    colorDisabled: '#282730',
    colorFocus: '#282730',

    fontSizeLarge: '16px',
  },
  InternalSelection: {
    borderFocus: '1px solid #9747ff',
    borderHover: '1px solid #9747ff',
    boxShadowFocus: '0 0 0 2px rgba(225, 93, 239, 0.2)',
    borderRadius: '10px',
    border: '1px solid #32303a',
    placeholderColor: '#9EA8BD',

    color: '#282730',
    colorDisabled: '#282730',
    colorFocus: '#282730',

    fontSizeLarge: '16px',
    textColorDisabled: 'var(--text-color1)',
  },
  InternalSelectMenu: {
    optionTextColorPressed: 'var(--text-color0)',
    optionTextColorActive: 'var(--text-color0)',
    optionCheckColor: 'var(--text-color0)',
  },
  Upload: {
    draggerBorderHover: '1px dashed #9747FF',
  },
  Button: {
    textColorPrimary: '#FFFFFF',
    textColorHoverPrimary: '#FFFFFF',
    textColorPressedPrimary: '#FFFFFF',
    textColorFocusPrimary: '#FFFFFF',
    textColorDisabledPrimary: '#FFFFFF',
    borderRadiusTiny: '3px',
    borderRadiusSmall: '3px',
    borderRadiusMedium: '6px',
    borderRadiusLarge: '8px',
    // normal
    rippleColor: 'var(--primary-color)',
    colorPrimary: 'var(--primary-color)',
    colorDisabledPrimary: 'var(--primary-color)',
    textColorTextPrimary: 'var(--primary-color)',
    textColorGhostPrimary: 'var(--primary-color)',
    textColorGhostDisabledPrimary: 'var(--primary-color)',
    borderPrimary: 'var(--primary-color)',
    borderDisabledPrimary: 'var(--primary-color)',
    // depth -1
    textColorHover: 'var(--text-color0)',
    textColorFocus: 'var(--text-color0)',
    textColorTextHover: 'var(--text-color0)',
    textColorTextFocus: 'var(--text-color0)',
    textColorGhostHover: 'var(--text-color0)',
    textColorGhostFocus: 'var(--text-color0)',
    colorHoverPrimary: '#783FF9FF',
    colorFocusPrimary: '#783FF9FF',
    textColorTextHoverPrimary: '#783FF9FF',
    textColorTextFocusPrimary: '#783FF9FF',
    textColorGhostHoverPrimary: '#783FF9FF',
    textColorGhostFocusPrimary: '#783FF9FF',
    borderHover: '1px solid var(--text-color0)',
    borderFocus: '1px solid var(--text-color0)',
    borderFocusPrimary: '1px solid #783FF9FF',
    borderHoverPrimary: '1px solid #783FF9FF',
    // depth 1
    textColorPressed: 'var(--text-color0)',
    textColorTextPressed: 'var(--text-color0)',
    textColorGhostPressed: 'var(--text-color0)',
    colorPressedPrimary: '#45299BFF',
    textColorTextPressedPrimary: '#45299BFF',
    textColorGhostPressedPrimary: '#45299BFF',
    borderPressed: '1px solid var(--text-color0)',
    borderPressedPrimary: '1px solid #45299BFF',
  },
  Tabs: {
    tabTextColorActive: 'var(--primary-color)',
    tabTextColorHover: 'var(--primary-color)',
    barColor: 'var(--primary-color)',
  },
  LoadingBar: {
    colorLoading: 'var(--primary-color)',
  },
};
