// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import useFetch from './../../../../shared/libs/Hooks/useFetch';
import { error } from 'console';

export function App() {
  const { data, loading, error } = useFetch(
    'https://api.restful-api.dev/objects'
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Some Error Occured...{error?.message}</h1>;
  }

  return (
    <div>
      {/* <NxWelcome title="webApp" /> */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h1 style={{ color: 'blue' }}>Hello Inside Web</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {data?.length > 0 &&
            data?.map((item: any) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  border: '1px solid black',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '15px',
                  fontSize: '20px',
                }}
              >
                <p>{item.name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
