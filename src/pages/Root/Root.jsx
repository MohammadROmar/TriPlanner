import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { Outlet, useLocation } from 'react-router-dom';

import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import Modal from '../../components/UI/Modal/Modal.jsx';
import ScrollToTop from '../../components/ScrollToTop.jsx';
import SideBar from '../../components/SideBar/SideBar.jsx';

import { refreshTokens, logout } from '../../store/slices/auth.js';
import { refreshToken } from '../../util/http/methods/post/refreshToken.js';

import './Root.css';

export default function RootLayout() {
  const dialog = useRef();

  const diapatch = useDispatch();

  const location = useLocation();

  const { mutate } = useMutation({
    mutationFn: refreshToken,
    onSuccess: (data) => {
      diapatch(refreshTokens(data));
    },
    onError: () => {
      dialog.current.open();
    },
  });

  const sideBarIsOpen = useSelector((state) => state.backdrop.isOpen);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    // Access Token expires after 30 minutes
    const expiresInMilliseconds = 29 * 1000 * 60;

    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      mutate();
    }

    const tokensInterval = setInterval(() => {
      const refresh = localStorage.getItem('refreshToken');

      if (refresh) {
        mutate();
      }
    }, expiresInMilliseconds);

    return () => clearInterval(tokensInterval);
  }, []);

  const cssClasses =
    (sideBarIsOpen ? 'active' : '') + (!isAuthenticated ? ' hidden' : '');

  return (
    <>
      <ScrollToTop />

      <Modal
        ref={dialog}
        isAlert
        title="Session Has ended!"
        onConfirm={() => {
          diapatch(logout());
        }}
      >
        <p>Please click logout and try loging in again.</p>
      </Modal>

      <Header />

      {isAuthenticated && <SideBar />}

      <main id="content" className={cssClasses}>
        <motion.div
          key={location.pathname
            .replace('createServiceOwner', '')
            .replace('fillUserWallet', '')
            .replace('/addService', '')}
          id="root-page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Outlet />
        </motion.div>
      </main>

      <Footer />
    </>
  );
}
