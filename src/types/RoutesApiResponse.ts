import { SiteRoutes } from '.';
export interface RoutesApiResponse {
  status: number;
  data: { [index: string]: SiteRoutes };
  message: string;
}
