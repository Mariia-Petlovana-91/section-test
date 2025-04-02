import Toast from './components/common/Toast/Toast';
import Section from './components/common/Section/Section';

import About from './components/About/About';
import Form from './components/Form/Form';
export default function App() {
  return (
    <>
      <Section>
        <About />
        <Form />
      </Section>
      <Toast />
    </>
  );
}
