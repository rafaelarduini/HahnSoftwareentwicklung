using Autofac;

namespace HahnSoftwareentwicklung.Infrastructure.CrossCutting.IOC
{
    public class ModuleIOC : Module
    {
        protected override void Load (ContainerBuilder builder)
        {
            ConfigurationIOC.Load(builder);
        }
    }
}