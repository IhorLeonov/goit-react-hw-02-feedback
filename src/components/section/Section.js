import PropTypes from 'prop-types';
import { SectionBox } from 'components/section/Section.styled';
export const Section = ({ children, title }) => {
  return (
    <SectionBox>
      <h2>{title}</h2>
      {children}
    </SectionBox>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
