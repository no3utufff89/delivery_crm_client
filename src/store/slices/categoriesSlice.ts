// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { AxiosResponse } from "axios";

// type f = State<Category, CustomError>;

// const initialState: f = {
//     loading: false,
//     status: null,
//     data: [],
// };
// export const fetchCategories = createAsyncThunk(
//     "categories/fetchCategories",
//    async ():Promise<AxiosResponse> => {
//     const responce = await getAllCategories();
//     return responce;
//    }
// )
// export const createNewCategory = createAsyncThunk(
//     "categories/createCategory",
//     async (category: Omit<Category, "id">):Promise<AxiosResponse> => {
//       return await createCategory(category);
//     }
// )
// const categoriesSlice = createSlice({
//     name: "categories",
//     initialState: initialState,
//     reducers: {
       
//     },
//     extraReducers(builder) {
//         builder
//            .addCase(fetchCategories.pending, (state) => {
//                 state.loading = true;
//             })
//            .addCase(fetchCategories.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.data = action.payload.data;
//                 state.status = action.payload.status;
//             })
//            .addCase(fetchCategories.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error;
//             })
//             .addCase(createNewCategory.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(createNewCategory.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.data = [...state.data as Category[], ...action.payload.data];
//                 console.log(action.payload);
//                 state.status = action.payload.status;
                
//             })
//             .addCase(createNewCategory.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error;
//             });
            
//     },
//     selectors: {
//         getCategoriesList: (state) => state.data,

//     }
// });
// export const { getCategoriesList } = categoriesSlice.selectors;
// export default categoriesSlice.reducer;