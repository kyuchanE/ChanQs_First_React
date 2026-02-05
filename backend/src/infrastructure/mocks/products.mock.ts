import type { Product } from '../../domain/entities/product.js';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod_001',
    name: '시그니처 원두 세트',
    imageUrl: 'https://example.com/images/coffee-beans.jpg',
    description: '하우스 블렌드 원두 3종으로 구성된 커피 세트입니다.',
  },
  {
    id: 'prod_002',
    name: '핸드 드립 포트',
    imageUrl: 'https://example.com/images/drip-pot.jpg',
    description: '정교한 온도 제어가 가능한 600ml 스테인리스 드립 포트.',
  },
  {
    id: 'prod_003',
    name: '더치 커피 메이커',
    imageUrl: 'https://example.com/images/dutch-coffee.jpg',
    description: '12시간 이상 추출 가능한 유리 소재 더치 커피 메이커.',
  },
];
