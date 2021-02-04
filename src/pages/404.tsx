import { Glitch404, Container, Message } from "../styles/pages/Notfound";

export default function NotFound() {
  return (
    <Container>
      <Glitch404 title="404">404</Glitch404>
      <Message>Page not found.</Message>
    </Container>
  );
}
