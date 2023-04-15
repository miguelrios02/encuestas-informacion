export interface TypePublicationResponse {
  results: Results;
}

export interface Results {
  count: number;
  totalPages: number;
  currentPage: number;
  results: TypePublication[];
}

export interface TypePublication {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}
