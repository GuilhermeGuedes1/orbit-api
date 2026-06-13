import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Organization')
@Controller('organization')
export class OrganizationController {}
