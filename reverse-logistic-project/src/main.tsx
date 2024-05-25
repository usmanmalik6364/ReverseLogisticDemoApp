import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css'
import App from './layout/App'
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)



