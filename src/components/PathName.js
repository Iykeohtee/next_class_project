import { usePathname } from 'next/navigation';

const MyComponent = () => {
  const pathname = usePathname();

  return (
    <div>
      <p>Current Pathname: {pathname}</p>
    </div>
  );
};

export default MyComponent;  