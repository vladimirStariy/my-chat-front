import { useRefreshQuery } from "../services/auth.service"

export const RefreshSocketHelper = async () => {
  const {data, isError, isLoading, isSuccess} = useRefreshQuery();
  console.log(data);
}