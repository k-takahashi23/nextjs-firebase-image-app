import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCurrentUser } from "./useCurrentUser"

export const useRequireLogin = () => {
  const { isLoading, currentUser } = useCurrentUser();
  const router = useRouter();
  
  useEffect(() => {
    console.log('useRequireLogin: ', isLoading, currentUser);
    if(isLoading) return;
    if(!currentUser) router.push("/login");
  }, [isLoading, currentUser])
}