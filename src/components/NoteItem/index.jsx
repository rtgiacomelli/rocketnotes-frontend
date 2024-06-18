import { FiPlus, FiX } from 'react-icons/fi';

import { Container } from './styles'

import PropTypes from 'prop-types';

export function NoteItem({ isNew, value, onClick, ...rest }){
  return(
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button 
        type="button"
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}

NoteItem.propTypes = {
  isNew: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};