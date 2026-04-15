import { useState, cloneElement, Children } from 'react';
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';
import StatusModal from '../components/StatusModal';
import AuthModal from '../components/AuthModal';
import LegalModal from '../components/LegalModal';
import ProductModal from '../components/ProductModal';
import Footer from '../components/Footer';
import { legalData } from '../data/legal';

const Layout = ({ children }) => {
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [activeLegal, setActiveLegal] = useState(null);
  
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openLegal = (type) => {
    setActiveLegal(legalData[type]);
    setIsLegalOpen(true);
  };

  const openProduct = (product) => {
    setSelectedProduct(product);
    setIsProductOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <TopBar />
      <Navbar 
        onStatusClick={() => setIsStatusOpen(true)} 
        onLoginClick={() => setIsAuthOpen(true)} 
      />
      
      <main className="w-full">
        {Children.map(children, child => 
          cloneElement(child, { onProductClick: openProduct })
        )}
      </main>
      
      {/* Global Modals */}
      <StatusModal isOpen={isStatusOpen} onClose={() => setIsStatusOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      <ProductModal 
        isOpen={isProductOpen} 
        onClose={() => setIsProductOpen(false)} 
        product={selectedProduct}
      />
      <LegalModal 
        isOpen={isLegalOpen} 
        onClose={() => setIsLegalOpen(false)} 
        title={activeLegal?.title}
        sections={activeLegal?.sections || []}
      />

      <Footer 
        onLegalClick={openLegal} 
        onStatusClick={() => setIsStatusOpen(true)} 
      />
    </div>
  );
};

export default Layout;
