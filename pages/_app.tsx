import { SessionProvider } from 'next-auth/react';

interface MyAppProps {
  Component: React.ComponentType<any>;
  pageProps: {
    session: any;
    [key: string]: any;
  };
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const { session, ...restPageProps } = pageProps;

  return (
    <SessionProvider session={session}>
      <Component {...restPageProps} />
    </SessionProvider>
  );
}

export default MyApp;
