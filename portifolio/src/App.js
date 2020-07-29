import React from 'react';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import Route from './routes';

function App() {
  return (
    <>
      <Sidebar />
      <main id="main">
        <Route />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
