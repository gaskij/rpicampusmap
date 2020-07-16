import * as React from 'react';
import { ReactElement } from 'react';

import { Comment } from 'src/types';

interface Props {
  data: Comment;
}

const CommentElement = ({ data }: Props): ReactElement => (
  <div></div>
);

export default CommentElement;
