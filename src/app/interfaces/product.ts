export interface IProduct {
  Image:               string;
  Image1:              string;
  Content:             string;
  Keywords:            string;
  Name:                string;
  Category:            string;
  Colors:              string;
  Price:               string;
  Promo_apply:         string;
  Reviews?:             IReviews | null;
  Description_title:   string;
  Description_content: string;
  Details:             string;
  Care?:                ICare | null;
  Color_detail:        IColorDetail[];
}

export interface ICare {
  title:   string;
  content: string[];
}

export interface IColorDetail {
  color:     string;
  image_url: string;
}

export interface IReviews {
  votes:  number;
  rating: number;
}
