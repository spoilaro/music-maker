export const SampleTemplate = (name: string, length: number): string => {
  return `
  <div class="sample" style="width: ${length}px; background-color: blue" >
    <p>${name}</p>
  </div>
`;
};
