import Link from '@mui/material/Link';
export default function NewLink(props){
  const {href, text} = props
  return (
    <Link href={href} underline="none" sx={{ color: 'white', textDecoration: 'none' }}>
      {text}
    </Link>
  );
};