const fetchOkStub = (data) => () => (
  new Promise((resolve) => {
    resolve({
      status: 200,
      ok: true,
      json: () => new Promise((innerResolve) => {
        innerResolve(data);
      }),
    });
  })
);

const fetchErrStub = (status) => () => (
  new Promise((resolve) => {
    resolve({
      status,
      ok: false,
    });
  })
);

export {
  fetchOkStub,
  fetchErrStub,
};
