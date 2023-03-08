import { extendTheme } from '@chakra-ui/react'

export const theme = {
    // 기본 테마
    colors: {
        chakraPrimary: {
            // 100: '#F8F1FF',
            // 300: '#CCAAFE',
            // 400: '#B688FE',
            500: '#9754fb',
            // 600: '#9754FB',
        },
        red: {
            500: '#FC8181',
        },
        chakraGray: {
            100: '#EDF2F7',
            200: '#E2E8F0',
            300: '#CBD5E0',
            500: '#718096',
            600: '#4A5568',
            700: '#2D3748',
        },
    },
    value: {
        sidePadding: 20,
    },

    //크리스마스 테마
    // colors: {
    //   chakraPrimary: {
    //     100: '#F8F1FF',
    //     300: '#CCAAFE',
    //     400: '#B688FE',
    //     500: '#f5424d',
    //     600: '#9754FB',
    //   },
    //   red: {
    //     500: '#718096',
    //   },
    //   chakraGray: {
    //     100: '#EDF2F7',
    //     200: '#E2E8F0',
    //     300: '#CBD5E0',
    //     500: '#718096',
    //     600: '#4A5568',
    //     700: '#2D3748',
    //   },
    // },
    // value: {
    //   sidePadding: 20,
    // },
}

export const extendedTheme = extendTheme(theme)
