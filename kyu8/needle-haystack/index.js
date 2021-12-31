function findNeedle(haystack) {
  const needle = haystack.indexOf("needle");
  return `found the needle at position ${needle}`;
}

console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);
