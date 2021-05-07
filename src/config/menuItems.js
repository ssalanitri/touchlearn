import React from 'react'
import allLocales from './locales'
import allThemes from './themes'

import SlideshowIcon from '@material-ui/icons/Slideshow';
import HistoryIcon from '@material-ui/icons/History';
import SearchIcon from '@material-ui/icons/Search';
import GamesIcon from '@material-ui/icons/Games';

import {
  Assignment,
  Business,
  ChromeReaderMode,
  Web,
  GetApp,
  InfoOutlined,
  People,
  Security,
  Slideshow,
  CallToAction,
  Whatshot,
  Chat,
  AccountBox as AccountBoxIcon,
  Dashboard as DashboardIcon,
  ExitToApp as ExitToAppIcon,
  FormatTextdirectionRToL as RTLIcon,
  FormatTextdirectionLToR as LTRIcon,
  Language as LanguageIcon,
  Lock as LockIcon,
  MenuOpen as MenuOpenIcon,
  SettingsApplications as SettingsIcon,
  Style as StyleIcon,
} from '@material-ui/icons'

const getMenuItems = (props) => {
  const {
    intl,
    updateLocale,
    locale,
    themeContext,
    menuContext,
    a2HSContext,
    firebaseApp,
    auth: authData,
  } = props

  const { isAuthMenuOpen, isDesktop, isMiniSwitchVisibility, toggleThis } =
    menuContext || {}
  const { isRTL, setThemeID, themeID, toggleThisTheme } = themeContext || {}
  const { isAppInstallable, isAppInstalled, deferredPrompt } = a2HSContext || {}

  const { auth } = authData || {}
  const { isGranted = () => false, isAdmin = false } = auth || {}

  const localeItems = allLocales.map((l) => {
    return {
      value: undefined,
      visible: true,
      primaryText: intl.formatMessage({ id: l.locale }),
      onClick: () => {
        updateLocale(l.locale)
        if (!isAuthorised) {
          try {
            window.location.reload()
          } catch (error) {}
        }
      },
      leftIcon: <LanguageIcon />,
    }
  })

  const isAuthorised = auth.isAuthenticated

  const themeItems = allThemes.map((t) => {
    return {
      value: undefined,
      visible: true,
      primaryText: intl.formatMessage({ id: t.id }),
      onClick: () => {
        setThemeID(t.id)
      },
      leftIcon: <StyleIcon style={{ color: t.color }} />,
    }
  })

  const handleSignOut = () => {
    toggleThis('isAuthMenuOpen', false)
    firebaseApp.auth().signOut()
    localStorage.clear()
  }

  if (isAuthMenuOpen) {
    return [
      {
        value: '/my_account',
        primaryText: intl.formatMessage({
          id: 'my_account',
          defaultMessage: 'Mi Cuenta',
        }),
        leftIcon: <AccountBoxIcon />,
      },
      {
        value: '/signin',
        onClick: isAuthorised ? () => handleSignOut() : () => {},
        visible: true,
        primaryText: isAuthorised
          ? intl.formatMessage({ id: 'sign_out' })
          : intl.formatMessage({ id: 'sign_in' }),
        leftIcon: isAuthorised ? <ExitToAppIcon /> : <LockIcon />,
      },
    ]
  }
  return [
    {
      value: '/signin',
      onClick: isAuthorised ? () => handleSignOut() : () => {},
      visible: !isAuthorised,
      primaryText: isAuthorised
        ? intl.formatMessage({ id: 'sign_out' })
        : intl.formatMessage({ id: 'sign_in' }),
      leftIcon: isAuthorised ? <ExitToAppIcon /> : <LockIcon />,
    },
    {
      value: '/',
      visible: isAuthorised,
      primaryText: intl.formatMessage({
        id: 'landing_page',
        defaultMessage: 'Inicio',
      }),
      leftIcon: <Web />,
    },
    {
      value: '/dashboard',
      visible: isAuthorised,
      primaryText: intl.formatMessage({
        id: 'dashboard',
        defaultMessage: 'Tablero',
      }),
      leftIcon: <DashboardIcon />,
    },
    {
      value: '/about',
      visible: true,
      primaryText: intl.formatMessage({ 
        id: 'about', 
        defaultMessage: 'Acerca de' 
      }),
      leftIcon: <InfoOutlined />,
    },
    // {
    //   value: '/chats',
    //   visible: isAuthorised,
    //   primaryText: intl.formatMessage({ 
    //                id: 'chats', 
    //                defaultMessage: 'Chats' 
    //               }),
    //   leftIcon: <Chat />,
    // },
      {
      primaryText: intl.formatMessage({
        id: 'games',
        defaultMessage: 'Juegos',
      }),
      visible: isAuthorised,
      primaryTogglesNestedList: true,
      leftIcon: <Slideshow />,
      nestedItems: [
        {
          value: '/game',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'game',
            defaultMessage: 'Juego ejemplo',
          }),
          leftIcon: <SlideshowIcon />,
        },
        {
          value: '/create_game',
          visible: isGranted(auth, 'create_game'),
          primaryText: intl.formatMessage({
            id: 'create_game',
            defaultMessage: 'Crear Juego',
          }),
          leftIcon: <GamesIcon />,
        },
        {
          value: '/search_games',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'search_games',
            defaultMessage: 'Buscar Juegos',
          }),
          leftIcon: <SearchIcon />,
        },
        {
          value: '/my_games',
          visible: isAuthorised,
          visible: isGranted(auth, 'my_games'),
          primaryText: intl.formatMessage({
            id: 'my_games',
            defaultMessage: 'Mis Juegos',
          }),
          leftIcon: <SearchIcon />,
        },
        {
          value: '/foros',
          visible: isGranted(auth, 'view_foros'),
          primaryText: intl.formatMessage({
            id: 'foros',
            defaultMessage: 'Foros',
          }),
          leftIcon: <CallToAction />,
        },
      ],
    },
  
    {
      primaryText: intl.formatMessage({
        id: 'demos',
        defaultMessage: 'Demos',
      }),
      visible: isAuthorised,
      primaryTogglesNestedList: true,
      leftIcon: <Slideshow />,
      nestedItems: [
        {
          value: '/admin',
          visible: !isAdmin,
          primaryText: intl.formatMessage({
            id: 'admin',
            defaultMessage: 'Admin',
          }),
          leftIcon: <Security />,
        },
        {
          value: '/companies',
          visible: isGranted(auth, 'read_companies'),
          primaryText: intl.formatMessage({
            id: 'companies',
            defaultMessage: 'Companies',
          }),
          leftIcon: <Business />,
        },
        {
          value: '/tasks',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'tasks',
            defaultMessage: 'Tasks',
          }),
          leftIcon: <Assignment />,
        },
        {
          value: '/posts',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'posts',
            defaultMessage: 'Posts',
          }),
          leftIcon: <CallToAction />,
        },
      ],
    },
    {
      primaryText: intl.formatMessage({
        id: 'tutorial',
        defaultMessage: 'Tutorial',
      }),
      visible: isAuthorised,
      primaryTogglesNestedList: true,
      leftIcon: <Assignment />,
      nestedItems: [
        {
          value: '/docu/getting_started',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'getting_started',
            defaultMessage: 'Como empezar',
          }),
          leftIcon: <Assignment />,
        },
      ],
    },

    // {
    //   primaryText: intl.formatMessage({
    //     id: 'firebase',
    //     defaultMessage: 'Firebase',
    //   }),
    //   visible: isAuthorised,
    //   primaryTogglesNestedList: true,
    //   leftIcon: <Whatshot />,
    //   nestedItems: [
    //     {
    //       value: '/firebase_paths',
    //       visible: isAuthorised,
    //       primaryText: intl.formatMessage({
    //         id: 'firebase_paths',
    //         defaultMessage: 'Paths',
    //       }),
    //       leftIcon: <Whatshot />,
    //     },
    //     {
    //       value: '/firebase_lists',
    //       visible: isAuthorised,
    //       primaryText: intl.formatMessage({
    //         id: 'firebase_lists',
    //         defaultMessage: 'Lists',
    //       }),
    //       leftIcon: <Whatshot />,
    //     },
    //     {
    //       value: '/firebase_docs',
    //       visible: isAuthorised,
    //       primaryText: intl.formatMessage({
    //         id: 'firebase_docs',
    //         defaultMessage: 'Docs',
    //       }),
    //       leftIcon: <Whatshot />,
    //     },
    //     {
    //       value: '/firebase_cols',
    //       visible: isAuthorised,
    //       primaryText: intl.formatMessage({
    //         id: 'firebase_cols',
    //         defaultMessage: 'Cols',
    //       }),
    //       leftIcon: <Whatshot />,
    //     },
    //     {
    //       value: '/firebase_messaging',
    //       visible: isAuthorised,
    //       primaryText: intl.formatMessage({
    //         id: 'firebase_messaging',
    //         defaultMessage: 'Messaging',
    //       }),
    //       leftIcon: <Whatshot />,
    //     },
    //     {
    //       value: '/firebase_storage',
    //       visible: isAuthorised,
    //       primaryText: intl.formatMessage({
    //         id: 'firebase_storage',
    //         defaultMessage: 'Storage',
    //       }),
    //       leftIcon: <Whatshot />,
    //     },
    //   ],
    // },

    {
      primaryText: intl.formatMessage({
        id: 'administration',
        defaultMessage: 'Administracion',
      }),
      primaryTogglesNestedList: true,
      visible: isAdmin,
      leftIcon: <Security />,
      nestedItems: [
        {
          value: '/users',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'users',
            defaultMessage: 'Usuarios',
          }),
          leftIcon: <People />,
        },
        {
          value: '/roles',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'roles',
            defaultMessage: 'Roles',
          }),
          leftIcon: <AccountBoxIcon />,
        },
      ],
    },
    { divider: true },
    {
      visible: true,
      primaryText: intl.formatMessage({ id: 'settings' }),
      primaryTogglesNestedList: true,
      leftIcon: <SettingsIcon />,
      nestedItems: [
        {
          visible: true,
          primaryText: intl.formatMessage({ id: 'theme' }),
          secondaryText: intl.formatMessage({ id: themeID }),
          primaryTogglesNestedList: true,
          leftIcon: <StyleIcon />,
          nestedItems: themeItems,
        },
        {
          visible: true,
          primaryText: intl.formatMessage({ id: 'language' }),
          secondaryText: intl.formatMessage({ id: locale }),
          primaryTogglesNestedList: true,
          leftIcon: <LanguageIcon />,
          nestedItems: localeItems,
        },
        {
          visible: isDesktop ? true : false,
          onClick: () => {
            toggleThis('isMiniSwitchVisibility')
          },
          primaryText: intl.formatMessage({
            id: 'menu_mini_mode',
          }),
          leftIcon: isMiniSwitchVisibility ? (
            <MenuOpenIcon />
          ) : (
            <ChromeReaderMode />
          ),
        },
        {
          visible: true,
          onClick: () => {
            toggleThisTheme('isRTL')
            window.location.reload(false)
          },
          primaryText: `${isRTL ? 'LTR' : 'RTL'} mode`,
          leftIcon: isRTL ? <LTRIcon /> : <RTLIcon />,
        },
      ],
    },
    {
      visible: isAppInstallable && !isAppInstalled,
      onClick: () => {
        deferredPrompt.prompt && deferredPrompt.prompt()
      },
      primaryText: intl.formatMessage({
        id: 'install',
        defaultMessage: 'Install',
      }),
      leftIcon: <GetApp />,
    },
  ]
}
export default getMenuItems