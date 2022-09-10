export interface SplitPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
