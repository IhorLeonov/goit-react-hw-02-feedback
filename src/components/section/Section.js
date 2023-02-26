import { SectionBox } from 'components/section/Section.styled';
import PropTypes from 'prop-types';

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
