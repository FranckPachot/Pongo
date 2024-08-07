import format from 'pg-format';

export type SQL = string & { __brand: 'sql' };

export const sql = (sqlQuery: string, ...params: unknown[]): SQL => {
  return format(sqlQuery, ...params) as SQL;
};
