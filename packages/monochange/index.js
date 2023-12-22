export function doChange(change) {
  if (!change) {
    console.log("Done 'default' change!");
  } else {
    console.log(`Done '${change}' change!`);
  }
}

export function createChange(changeFunction) {
  return changeFunction();
}
