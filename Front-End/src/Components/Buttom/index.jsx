import { ButtonComponent } from "./style";

const Button = ({ children, ...rest }) => {
  return (
    <ButtonComponent type="button" {...rest}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
