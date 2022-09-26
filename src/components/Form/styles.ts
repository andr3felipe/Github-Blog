import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 0.75rem;

  margin-bottom: 3rem;

  > div {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    width: 54rem;
    max-width: 60vw;
    margin: 0 auto;

    flex: 1;

    h3 {
      font-size: 1.125rem;
      font-weight: 700;

      color: ${(props) => props.theme['base-subtitle']};
    }

    h5 {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  > form {
    display: flex;
    align-items: center;
    justify-items: center;

    width: 54rem;
    max-width: 60vw;
    margin: 0 auto;
  }
`

export const Input = styled.input`
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};
  flex: 1;

  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
