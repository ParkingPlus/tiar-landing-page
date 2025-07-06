/// <reference types="next" />

import { PageProps } from 'next';

declare module 'next' {
  interface PageProps {
    params: Promise<any>;
    searchParams: Promise<any>;
  }
}