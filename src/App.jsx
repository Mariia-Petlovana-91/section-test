import { useState } from 'react';

import Toast from './components/common/Toast/Toast';
import Section from './components/common/Section/Section';

import About from './components/About/About';
import Form from './components/Form/Form';
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Section>
        <About isOpen={isOpen} setIsOpen={setIsOpen} />
        <Form isOpen={isOpen} setIsOpen={setIsOpen} />
      </Section>
      <Toast />
    </>
  );
}
