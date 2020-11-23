﻿using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using CIC_EP.DynamicEntityParameters.Dto;

namespace CIC_EP.DynamicEntityParameters
{
    public interface IDynamicParameterValueAppService
    {
        Task<DynamicParameterValueDto> Get(int id);

        Task<ListResultDto<DynamicParameterValueDto>> GetAllValuesOfDynamicParameter(EntityDto input);

        Task Add(DynamicParameterValueDto dto);

        Task Update(DynamicParameterValueDto dto);

        Task Delete(int id);
    }
}
