// Exercise #4
let getJohnProfile = async () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};
// Start coding here
async function getDatajohn() {
  try {
    const getJohnData = await getJohnProfile();
    console.log(getJohnData);
  } catch (error) {
    console.log(error);
  }
}
getDatajohn();
