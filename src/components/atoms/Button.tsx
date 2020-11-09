type ButtonProps = {
  text: string
}

const Button: React.FunctionComponent<ButtonProps> = (props): JSX.Element => (
  <button type="button">{props.text}</button>
)

export default Button
