import * as React from 'react';
import { ReactElement } from 'react';

import { Comment } from 'src/types';

interface Props {
  data: Comment;
}

const CommentElement = ({ data }: Props): ReactElement => (
  <div className="py-2 border-bottom">
    <div><b>{data.author}</b> &#8226; {data.timestamp.toLocaleString()}</div>
    <div>{data.text}</div>
  </div>
);

export default CommentElement;
