import { ApolloServerPlugin } from "@apollo/server";

type _Context = {};

const initialSetting = (): ApolloServerPlugin<_Context> => {
  return {
    async requestDidStart(request) {
      if (request.operationName !== "IntrospectionQuery") {
        // NOTE: 開発環境でIntrospectionQueryを定期的に打鍵している関係上、ノイズになることがあるので、
        //       通常のQueryやMutationにだけ処理したい場合はここに書く
      }
    },
  };
};

export default initialSetting;
