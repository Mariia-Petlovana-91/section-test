import css from './Section.module.css';
import Container from '../Container/Container';

const Section = ({ children }) => {
  return (
    <section className={css.section}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
